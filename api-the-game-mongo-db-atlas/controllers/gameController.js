import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        // Requisição feita com sucesso
        res.status(200).json({ games });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

// Função para cadastrar um novo jogo
const createGame = async (req, res) => {
    try {
        const { title, year, price, descriptions } = req.body;
        await gameService.create(title, year, price, descriptions);
        // Criado com sucesso
        res.sendStatus(201); // 201 Success
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

// função para deletar um jogo
const deleteGame = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            await gameService.delete(id);
            // Deletado com sucesso
            res.sendStatus(204); // 204 No Content
        } else {
            res.status(400).json({ error: "ID inválido" }); // 400 Bad Request - requisição mal formada
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

const updateGame = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { title, year, price, descriptions } = req.body;
            await gameService.update(id, title, year, price, descriptions);
            res.sendStatus(200);
        } else {
            res.status(400).json({ error: "ID inválido" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

// Função para listar um único jogo
const getOneGame = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const game = await gameService.getOne(id);
            if (!game) {
                res.status(404).json({ error: "Jogo não encontrado" }); // 404 Not Found - não encontrado
            } else {
                res.status(200).json(game);
            }
        } else {
            res.status(400).json({ error: "ID inválido" });
        }
    } catch (error) {
        console.log(error);
    }
};

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame };
