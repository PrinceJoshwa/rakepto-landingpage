// api/keepalive.js
import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  console.log("SUPABASE URL:", process.env.VITE_SUPABASE_URL);
  console.log("SUPABASE KEY:", process.env.VITE_SUPABASE_ANON_KEY?.slice(0, 10) + "..."); 
  const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
  );

  const { error } = await supabase.from("heartbeat").select("id").limit(1);

  if (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }

  return res.status(200).json({ ok: true, at: new Date().toISOString() });
}
