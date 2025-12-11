import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { UserProfile } from '../types';
import { LogOut, User, Shield, Briefcase, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate('/login');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900">Hello Engineer</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="font-medium text-slate-900">{profile?.full_name}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-xs font-medium uppercase tracking-wide">
                  {profile?.role}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Dashboard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Profile Status</h3>
                    <p className="text-sm text-slate-500">Active</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Your profile is fully set up. You can update your details in settings.
                </p>
              </div>

               {/* Card 2 - Dynamic based on Role */}
               <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {profile?.role === 'expert' ? 'Active Projects' : 'My Requests'}
                    </h3>
                    <p className="text-sm text-slate-500">0 Active</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  {profile?.role === 'expert' 
                    ? 'You have no active engineering projects at the moment.' 
                    : 'You have not submitted any engineering requests yet.'}
                </p>
              </div>

               {/* Card 3 */}
               <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Account Type</h3>
                    <p className="text-sm text-slate-500">Authorized</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  You are logged in as a <strong>{profile?.role}</strong>.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 border border-slate-200 rounded-lg bg-slate-50">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Debug Info</h3>
              <p className="text-sm text-slate-500 font-mono">User ID: {profile?.id}</p>
              <p className="text-sm text-slate-500 font-mono">Email: {profile?.email}</p>
              <p className="text-sm text-slate-500 font-mono">Role: {profile?.role}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};