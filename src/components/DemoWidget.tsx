import React, { useState } from 'react';
import { X, Upload, Camera, Zap, TrendingUp, Target, Download } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import {
  createDetector,
  SupportedModels,
  FaceLandmarksDetector
} from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';

interface DemoWidgetProps {
  onClose: () => void;
  isModal?: boolean;
}

const DemoWidget = ({ onClose, isModal = true }: DemoWidgetProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [canCapture, setCanCapture] = useState(false);
  const [borderColor, setBorderColor] = useState<'red' | 'green'>('red');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [detector, setDetector] = useState<FaceLandmarksDetector | null>(null);

  // Ensure TensorFlow.js backend is set and ready before any model usage
  React.useEffect(() => {
    (async () => {
      try {
        await tf.setBackend('webgl');
      } catch {
        await tf.setBackend('cpu');
      }
      await tf.ready();
    })();
  }, []);

  // Load FaceMesh detector
  React.useEffect(() => {
    if (cameraActive && !detector) {
      createDetector(SupportedModels.MediaPipeFaceMesh, {
        runtime: 'tfjs',
        maxFaces: 1,
        refineLandmarks: true
      }).then(setDetector);
    }
  }, [cameraActive, detector]);

  // Camera stream and analysis
  React.useEffect(() => {
    let stream: MediaStream;
    let animationId: number;
    const analyzeFrame = async () => {
      if (!videoRef.current || !canvasRef.current || !detector) return;
      // Ensure video and canvas have valid, non-zero dimensions
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        animationId = requestAnimationFrame(analyzeFrame);
        return;
      }
      // Always sync canvas size to video size
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        animationId = requestAnimationFrame(analyzeFrame);
        return;
      }
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) {
        animationId = requestAnimationFrame(analyzeFrame);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(video, 0, 0, width, height);
      const frame = ctx.getImageData(0, 0, width, height);
      let total = 0;
      for (let i = 0; i < frame.data.length; i += 4) {
        total += 0.299 * frame.data[i] + 0.587 * frame.data[i+1] + 0.114 * frame.data[i+2];
      }
      const avgBrightness = total / (frame.data.length / 4) / 255 * 100;
      const predictions = await detector.estimateFaces(video);
      let roll = 0;
      let faceOk = false;
      // Draw face mesh if detected
      if (predictions.length > 0 && predictions[0].keypoints && predictions[0].keypoints.length > 0) {
        // Draw mesh points
        ctx.save();
        ctx.fillStyle = '#22c55e';
        predictions[0].keypoints.forEach((pt) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
          ctx.fill();
        });
        ctx.restore();
        // Log box and keypoints to console
        if (predictions[0].box) {
          console.log('box:', predictions[0].box);
        }
        console.log('keypoints:', predictions[0].keypoints);
        // Use nose as fallback for roll if eyes not found
        const leftEye = predictions[0].keypoints.find(k => k.name === 'leftEye');
        const rightEye = predictions[0].keypoints.find(k => k.name === 'rightEye');
        const nose = predictions[0].keypoints.find(k => k.name === 'noseTip' || k.name === 'nose');
        if (leftEye && rightEye) {
          roll = Math.atan2(leftEye.y - rightEye.y, leftEye.x - rightEye.x) * (180/Math.PI);
        } else if (nose) {
          roll = 0; // fallback: treat as straight
        }
        if (Math.abs(roll) < 10 && avgBrightness > 30 && avgBrightness < 70) {
          setBorderColor('green');
          setCanCapture(true);
          faceOk = true;
        } else {
          setBorderColor('red');
          setCanCapture(false);
        }
        ctx.lineWidth = 8;
        ctx.strokeStyle = faceOk ? '#22c55e' : '#ef4444';
        ctx.strokeRect(0, 0, width, height);
        ctx.font = '20px sans-serif';
        ctx.fillStyle = faceOk ? '#22c55e' : '#ef4444';
        ctx.textAlign = 'center';
        if (Math.abs(roll) >= 10) {
          ctx.fillText(roll > 0 ? 'Turn head right' : 'Turn head left', width/2, 40);
        } else if (avgBrightness <= 30) {
          ctx.fillText('Increase lighting', width/2, 40);
        } else if (avgBrightness >= 70) {
          ctx.fillText('Reduce lighting', width/2, 40);
        } else if (faceOk) {
          ctx.fillText('Perfect! Click to capture.', width/2, 40);
        }
      } else {
        setBorderColor('red');
        setCanCapture(false);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#ef4444';
        ctx.strokeRect(0, 0, width, height);
        ctx.font = '20px sans-serif';
        ctx.fillStyle = '#ef4444';
        ctx.textAlign = 'center';
        ctx.fillText('Face not detected', width/2, 40);
      }
      animationId = requestAnimationFrame(analyzeFrame);
    };
    if (cameraActive && videoRef.current && canvasRef.current && detector) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((s) => {
          stream = s;
          videoRef.current!.srcObject = stream;
          videoRef.current!.play();
          videoRef.current!.onloadedmetadata = () => {
            canvasRef.current!.width = videoRef.current!.videoWidth;
            canvasRef.current!.height = videoRef.current!.videoHeight;
            animationId = requestAnimationFrame(analyzeFrame);
          };
        })
        .catch(() => setCameraError('Could not access camera.'));
    }
    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [cameraActive, detector]);

  const handleCapture = () => {
    if (!canCapture || !canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL('image/jpeg');
    setSelectedImage(dataUrl);
    setCameraActive(false);
    setAnalysisResults(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResults(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults({
        overallScore: 73,
        issues: [
          { type: 'Dark Spots', severity: 65, count: 12, revenue: '$240' },
          { type: 'Fine Lines', severity: 45, count: 8, revenue: '$180' },
          { type: 'Pore Size', severity: 80, count: 25, revenue: '$320' },
          { type: 'Dryness', severity: 55, count: 1, revenue: '$150' }
        ],
        recommendations: [
          'HydraFacial Treatment - $180',
          'Microdermabrasion Session - $120',
          'Vitamin C Serum Application - $45',
          'LED Light Therapy - $90'
        ],
        potentialRevenue: '$890'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const containerClass = isModal 
    ? "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    : "w-full max-w-6xl mx-auto";

  const contentClass = isModal
    ? "bg-navy-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
    : "bg-navy-900 rounded-2xl w-full";

  return (
    <div className={containerClass}>
      <div className={contentClass}>
        {isModal && (
          <div className="p-6 border-b border-navy-800 flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-navy-50">
              AI Skin Analysis Demo
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-navy-800 rounded-xl transition-colors"
            >
              <X className="h-6 w-6 text-navy-400" />
            </button>
          </div>
        )}

        <div className="p-6">
          {!isModal && (
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-navy-50">
                Experience Our
                <span className="gradient-text"> AI Analysis</span>
              </h2>
              <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                Upload a photo and see how our AI identifies skin issues that drive additional revenue
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-navy-50">
                  Upload Client Photo
                </h3>
                
                <div className="border-2 border-dashed border-navy-600 rounded-xl p-8 text-center hover:border-coral-500 transition-colors">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={selectedImage} 
                        alt="Selected" 
                        className="max-w-full h-64 object-cover rounded-lg mx-auto"
                      />
                      <div className="flex space-x-4 justify-center">
                        <label className="btn-secondary cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Different Photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                        <button 
                          onClick={runAnalysis}
                          disabled={isAnalyzing}
                          className="btn-primary flex items-center space-x-2"
                        >
                          {isAnalyzing ? (
                            <>
                              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                              <span>Analyzing...</span>
                            </>
                          ) : (
                            <>
                              <Zap className="h-4 w-4" />
                              <span>Run AI Analysis</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <label className="cursor-pointer">
                        <Camera className="h-16 w-16 text-navy-400 mx-auto mb-4" />
                        <div className="text-navy-200 font-medium mb-2">
                          Upload a photo to analyze
                        </div>
                        <div className="text-navy-400 text-sm mb-4">
                          JPG, PNG or GIF up to 10MB
                        </div>
                        <div className="btn-primary inline-flex items-center space-x-2">
                          <Upload className="h-4 w-4" />
                          <span>Choose Photo</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      <button
                        className="btn-secondary flex items-center space-x-2 mt-4 mx-auto"
                        onClick={() => setCameraActive(true)}
                        type="button"
                      >
                        <Camera className="h-4 w-4" />
                        <span>Capture Photo</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Sample Images */}
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-navy-50">
                  Try Sample Images
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(`https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`)}
                      className="aspect-square bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors flex items-center justify-center"
                    >
                      <span className="text-navy-400 text-sm">Sample {i}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {analysisResults ? (
                <>
                  <div className="glass-effect rounded-2xl p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-navy-50">
                        Analysis Results
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-coral-400">
                          {analysisResults.overallScore}%
                        </div>
                        <div className="text-navy-400 text-sm">Skin Health Score</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {analysisResults.issues.map((issue: any, index: number) => (
                        <div key={index} className="bg-navy-800/50 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-navy-50">{issue.type}</span>
                            <span className="text-coral-400 font-semibold">{issue.revenue}</span>
                          </div>
                          <div className="flex justify-between text-sm text-navy-400 mb-2">
                            <span>{issue.count} areas detected</span>
                            <span>Severity: {issue.severity}%</span>
                          </div>
                          <div className="w-full bg-navy-700 rounded-full h-2">
                            <div 
                              className="bg-coral-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${issue.severity}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-effect rounded-2xl p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-navy-50">
                        Recommended Treatments
                      </h3>
                      <div className="text-coral-400 font-bold text-lg">
                        Total: {analysisResults.potentialRevenue}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {analysisResults.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-center justify-between bg-navy-800/50 rounded-lg p-3">
                          <span className="text-navy-200">{rec}</span>
                          <Target className="h-4 w-4 text-coral-400" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-navy-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-navy-50 font-semibold">Potential Revenue Increase</div>
                          <div className="text-navy-400 text-sm">From this single consultation</div>
                        </div>
                        <div className="flex items-center space-x-2 text-coral-400">
                          <TrendingUp className="h-5 w-5" />
                          <span className="text-xl font-bold">+{analysisResults.potentialRevenue}</span>
                        </div>
                      </div>
                      
                      <button className="w-full btn-primary flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download Full Report</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="glass-effect rounded-2xl p-8 text-center">
                  <div className="text-navy-400 mb-4">
                    <Zap className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-navy-50">
                    Ready for Analysis
                  </h3>
                  <p className="text-navy-400">
                    Upload an image and click "Run AI Analysis" to see detailed skin assessment and revenue opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>

          {!isModal && (
            <div className="mt-12 text-center">
              <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-navy-50">
                  Ready to Transform Your Salon?
                </h3>
                <p className="text-navy-300 mb-6">
                  This is just a preview. Our full system offers advanced features, client tracking, and seamless integration with your workflow.
                </p>
                <button className="btn-primary">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          )}
        </div>

        {cameraActive && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-navy-900 rounded-2xl w-full max-w-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-navy-50">
                  Capture Client Photo
                </h3>
                <button 
                  onClick={() => setCameraActive(false)}
                  className="p-2 hover:bg-navy-800 rounded-xl transition-colors"
                >
                  <X className="h-6 w-6 text-navy-400" />
                </button>
              </div>

              <div className="relative" style={{ border: `6px solid ${borderColor === 'green' ? '#22c55e' : '#ef4444'}`, borderRadius: '0.75rem', transition: 'border-color 0.3s' }}>
                <video ref={videoRef} className="rounded-lg w-full" autoPlay muted playsInline style={{ display: 'block' }} />
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
                {cameraError && <div className="text-red-500 mt-2">{cameraError}</div>}
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  className={`btn-primary flex items-center space-x-2 ${canCapture ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500/80 cursor-not-allowed'}`}
                  onClick={handleCapture}
                  disabled={!canCapture}
                >
                  <Camera className="h-5 w-5" />
                  <span>{canCapture ? 'Click to Capture' : 'Align Face & Lighting'}</span>
                </button>
                <button
                  className="btn-secondary flex items-center space-x-2"
                  onClick={() => setCameraActive(false)}
                >
                  <X className="h-5 w-5" />
                  <span>Cancel</span>
                </button>
              </div>

              <div className="mt-4 text-center text-navy-400 text-sm">
                {borderColor === 'green' ? 'Face is well aligned!' : 'Please adjust your position.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoWidget;
