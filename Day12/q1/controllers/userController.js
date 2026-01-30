import { supabase } from "../config/supabaseClient.js";

export const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(409).json({ error: "Email already exists" });
  }

  const { error } = await supabase
    .from("users")
    .insert([{ name, email, password }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: "User registered successfully" });
};
