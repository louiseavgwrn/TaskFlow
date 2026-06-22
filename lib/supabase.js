import { createClient } from '@supabase/supabase-js';
 
const SUPABASE_URL = 'https://lxqtperixubbxgijyfcb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXRwZXJpeHViYnhnaWp5ZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDg5MDQsImV4cCI6MjA5NzY4NDkwNH0.wIjeIyX9aJYuSN5N6Y_hNQWsiD3nk4PaFIWS-4PawVk';
 
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
