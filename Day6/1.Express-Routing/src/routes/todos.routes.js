import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

//add todo
router.post("/add", (req, res) => {
  const db = readDB();
  const todo = req.body;

  if (!todo.id || !todo.title) {
    return res.status(400).json({ message: "Invalid todo data" });
  }

  db.todos.push(todo);
  writeDB(db);

  res.status(201).json({ message: "Todo added", todo });
});

// get all todos
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// single todo
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id == req.params.todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

// update todo
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id == req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json({ message: "Todo updated", todo: db.todos[index] });
});

// delete todo
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const newTodos = db.todos.filter(t => t.id != req.params.todoId);

  if (newTodos.length === db.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos = newTodos;
  writeDB(db);

  res.json({ message: "Todo deleted" });
});

export default router;
