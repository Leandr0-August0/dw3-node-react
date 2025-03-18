import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para criar um novo game (rota)
gameRoutes.post("/games", gameController.createGame);

// Endpoint para excluir um game (rota)
gameRoutes.delete("/games/:id", gameController.deleteGame);

// Endpoint para atualizar um game (rota)
gameRoutes.put("/games/:id", gameController.updateGame);

// Endpoint para buscar um game pelo id (rota)
gameRoutes.get("/games/:id", gameController.getOneGame);

export default gameRoutes;
