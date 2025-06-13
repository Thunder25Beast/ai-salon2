import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ to = '/' }: { to?: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy-950">
      <h1 className="text-3xl font-bold text-coral-400 mb-4">Redirecting...</h1>
      <p className="text-navy-200">You are being redirected. If you are not redirected automatically, <a href={to} className="text-coral-400 underline">click here</a>.</p>
    </div>
  );
};

export default Redirect;
