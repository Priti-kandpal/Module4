import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

// read database
const readDB = () => {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

// write database
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

// add user
router.post("/add", (req, res) => {
  const db = readDB();
  const user = req.body;

  if (!user.id || !user.name) {
    return res.status(400).json({ message: "Invalid user data" });
  }

  db.users.push(user);
  writeDB(db);

  res.status(201).json({ message: "User added", user });
});

// get all user
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// single user
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id == req.params.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// update User
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id == req.params.userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);

  res.json({ message: "User updated", user: db.users[index] });
});

// delete user
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const newUsers = db.users.filter(u => u.id != req.params.userId);

  if (newUsers.length === db.users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users = newUsers;
  writeDB(db);

  res.json({ message: "User deleted" });
});

export default router;
