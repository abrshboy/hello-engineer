import React from 'react';
import { HardHat, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Side - Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <HardHat className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">Hello Engineer</span>
          </div>
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">Build the future with confidence.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Connect with top-tier engineers and architects to bring your vision to life. 
              Professional expertise, verified and ready to work.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        <Link 
          to="/"
          className="absolute top-5 right-5 sm:top-8 sm:right-8 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </Link>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};