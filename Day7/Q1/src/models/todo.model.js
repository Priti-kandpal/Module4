import fs from "fs";
import path from "path";

const dbPath = path.resolve("src/db.json");

export const readTodos = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data).todos;
};

export const saveTodos = (todos) => {
  fs.writeFileSync(dbPath, JSON.stringify({ todos }, null, 2));
};
