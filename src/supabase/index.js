import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ztjspdsnrkubukwijaat.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anNwZHNucmt1YnVrd2lqYWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyMDQ2NDgsImV4cCI6MTk3Nzc4MDY0OH0.weTRLvInACRW25L4DCs1O4QkEpKpQ92haNaHIYXgwLc';

export default createClient(supabaseUrl, supabaseAnonToken);
