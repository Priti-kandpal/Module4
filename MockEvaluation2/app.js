import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./src/routes/customerRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

dotenv.config();
const app =express();
app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port", process.env.PORT)
});


