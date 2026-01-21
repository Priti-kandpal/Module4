import { readTodos, saveTodos } from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    res.status(200).json(readTodos());
  } catch {
    res.status(500).json({ message: "Error" });
  }
};

export const addTodo = (req, res) => {
  try {
    const todos = readTodos();
    const newTodo = { id: Date.now(), title: req.body.title };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
  } catch {
    res.status(500).json({ message: "Error" });
  }
};
