import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { AuthLayout } from '../components/AuthLayout';
import { UserRole } from '../types';
import { Loader2, User, Hammer, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.CLIENT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: role,
          },
        },
      });

      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    {
      id: UserRole.CLIENT,
      title: 'Client',
      description: 'I need to hire an engineer or architect.',
      icon: User,
    },
    {
      id: UserRole.EXPERT,
      title: 'Expert',
      description: 'I am a professional looking for work.',
      icon: Hammer,
    },
    {
      id: UserRole.ADMIN,
      title: 'Admin',
      description: 'I manage the platform and users.',
      icon: Shield,
    },
  ];

  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Join Hello Engineer to get started"
    >
      <form className="mt-8 space-y-6" onSubmit={handleSignup}>
        <div className="space-y-4">
          {/* Role Selection */}
          <div className="grid grid-cols-1 gap-3">
            <label className="block text-sm font-medium text-slate-700 mb-1">Select your account type</label>
            {roleOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => setRole(option.id)}
                className={`relative flex items-start p-3 cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                  role === option.id
                    ? 'border-indigo-600 bg-indigo-50/50'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <option.icon className={`h-5 w-5 ${role === option.id ? 'text-indigo-600' : 'text-slate-400'}`} />
                </div>
                <div className="ml-3 flex-1">
                  <span className={`block text-sm font-medium ${role === option.id ? 'text-indigo-900' : 'text-slate-900'}`}>
                    {option.title}
                  </span>
                  <span className={`block text-xs ${role === option.id ? 'text-indigo-700' : 'text-slate-500'}`}>
                    {option.description}
                  </span>
                </div>
                {role === option.id && (
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 absolute top-3 right-3" />
                )}
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Create account'
          )}
        </button>

        <div className="text-center text-sm">
          <p className="text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};