import express from "express";
const userRoutes = express.Router();
import userController from "../controllers/userController.js";

// Endpoint para criar um novo usuário
userRoutes.post("/user", userController.newUser);

// Endpoint para logar buscar o usuário
userRoutes.post("/auth", userController.loginUser);

export default userRoutes;
