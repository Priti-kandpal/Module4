import express from "express";
import todoRouter from "./routes/todos.routes.js";
import { loggerMiddleware } from "./middleware/logger.middleware.js";

const app = express();

// JSON parser
app.use(express.json());

app.use(loggerMiddleware);

// Todo router
app.use("/todos", todoRouter);

// Server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
