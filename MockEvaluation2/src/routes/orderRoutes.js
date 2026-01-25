import express from "express";
import {addOrder, getOrders, updateOrder, deletetOrder} from 
"../controllers/orderController.js";

const router = express.Router();
 router.post("/add-order", addOrder);
 router.get("/get-my-orders/:customerId", getOrders);
 router.put("/update-order/:orderId", updateOrder);
 router.delete("/delete-order/:orderId", deleteOrder);

export default router;