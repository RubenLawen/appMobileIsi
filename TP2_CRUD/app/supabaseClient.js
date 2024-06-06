import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://eqgjfzsmedddrjqcvkwh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZ2pmenNtZWRkZHJqcWN2a3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NzIyOTQsImV4cCI6MjAzMzE0ODI5NH0.82Xua7-eldu-CAHGBwJ-niV6t0h--2jwZW9XvFbFhO4"

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })