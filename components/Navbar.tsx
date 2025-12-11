import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HardHat, Menu, X, User } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

interface NavbarProps {
  session: Session | null;
}

export const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Our Experts', href: '#experts' },
    { name: 'About Us', href: '#about' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If it's the home link or just "/"
    if (href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Handle hash links
    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home then scroll
        navigate('/');
        // Use a timeout to allow navigation to occur before scrolling
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2 bg-indigo-600 rounded-lg mr-2">
              <HardHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Hello Engineer</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => navigate('/signup')}
              className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors"
            >
              Find Expert
            </button>
            
            {session ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-sm transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 mt-4">
              {session ? (
                 <button
                 onClick={() => {
                   navigate('/dashboard');
                   setIsOpen(false);
                 }}
                 className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
               >
                 Go to Dashboard
               </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};