import { createClient } from "@supabase/supabase-js"

// const supabaseUrl = 'https://rizitagqyeicoziobdvm.supabase.co/rest/v1/contacts'; // Replace with your Supabase project URL
const supabaseUrl = 'https://rizitagqyeicoziobdvm.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeml0YWdxeWVpY296aW9iZHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MDk3MzgsImV4cCI6MjA1MjI4NTczOH0.U_L6EC22nWELxXn-O4xPIjQV4CejVXMjHGQPmF436ps'; // Replace with your Supabase anon key


if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)