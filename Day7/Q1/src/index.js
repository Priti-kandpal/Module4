import express from "express";
import todoRoutes from "./routes/todo.routes.js"; // .js REQUIRED

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
