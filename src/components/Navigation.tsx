import React, { useState } from 'react';
import { Sparkles, Users, BarChart3, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/results', label: 'Results' },
	{ to: '/partner', label: 'Partner' },
	{ to: '/faq', label: 'FAQ' },
	{ to: '/contact', label: 'Contact' },
	{ to: '/demo', label: 'Try Demo', icon: <BarChart3 className="h-5 w-5" /> },
];

const Navigation = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-navy-950/80 border-b border-navy-800/80 flex items-center justify-between py-4 px-6 backdrop-blur-md m-0 p-0">
			{/* Left: Brand and nav links */}
			<div className="flex items-center space-x-4">
				<div className="bg-coral-500 p-2 rounded-xl">
					<Sparkles className="h-6 w-6 text-white" />
				</div>
				{/* Desktop nav */}
				<div className="hidden md:flex items-center space-x-4">
					{navLinks.slice(0, 5).map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className="font-medium transition-colors text-navy-200 hover:text-coral-400"
						>
							{item.label}
						</Link>
					))}
				</div>
				{/* Hamburger for mobile */}
				<button
					className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-coral-400"
					onClick={() => setMobileOpen((v) => !v)}
					aria-label="Open navigation menu"
				>
					<Menu className="h-7 w-7 text-coral-400" />
				</button>
			</div>
			{/* Right: Try Demo & Client Portal */}
			<div className="flex items-center space-x-4">
				<Link
					to="/demo"
					className="font-medium flex items-center space-x-2 transition-colors text-navy-200 hover:text-coral-400"
				>
					<BarChart3 className="h-5 w-5" />
					<span>Try Demo</span>
				</Link>
				<Link
					to="/portal"
					className="btn-secondary flex items-center space-x-2"
				>
					<Users className="h-5 w-5" />
					<span>Client Portal</span>
				</Link>
			</div>
			{/* Mobile menu overlay */}
			{mobileOpen && (
				<div className="fixed inset-0 z-50 bg-navy-950/95 w-full flex flex-col items-center justify-center md:hidden animate-fade-in p-6">
					<button
						className="absolute top-8 right-8 p-2 text-coral-400 text-3xl"
						onClick={() => setMobileOpen(false)}
						aria-label="Close navigation menu"
					>
						×
					</button>
					<div className="flex flex-col bg-navy-950/95 space-y-8 mt-80 w-full items-center">
						{navLinks.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								className="text-2xl font-bold transition-colors w-full text-center text-navy-200 hover:text-coral-400"
								onClick={() => setMobileOpen(false)}
							>
								{item.icon}
								{item.label}
							</Link>
						))}
						<Link
							to="/portal"
							className="text-2xl font-bold transition-colors w-full text-center text-navy-200 hover:text-coral-400"
							onClick={() => setMobileOpen(false)}
						>
							Client Portal
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
