import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kighqptumqibztqeobqm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZ2hxcHR1bXFpYnp0cWVvYnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTQ0ODksImV4cCI6MjAxNzI3MDQ4OX0.54BmR2Hvw5t-jdqSHHZhyhOZoGsrUrX4hz-XLP3eR3U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
