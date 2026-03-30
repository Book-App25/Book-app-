const { createClient } = require('@supabase/supabase-js');

// These pull from the environment variables you added to Render
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// This creates the secure connection for your backend
const supabase = createClient(supabaseUrl, supabaseServiceKey);

module.exports = supabase;
