require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(express.json());
app.use(cors());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// SIGNUP API
app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PROFILE API
app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
