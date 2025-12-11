import { createClient } from '@supabase/supabase-js';

// Configuration based on user provided details
const SUPABASE_URL = 'https://zsvwntsznedtvkpydkns.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzdndudHN6bmVkdHZrcHlka25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NjA3MTAsImV4cCI6MjA4MTAzNjcxMH0.aCUVHNgAJzOqks_nPL1dxTLr2CGAaid7-U9o6S_8mK4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
