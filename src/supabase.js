import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://qgffcnpjlewcvitsszog.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_1P0m30G82rKy5KIFY5wGQA_rZ6XV-A5";

export const supabase = createClient(supabaseUrl, supabaseKey);
