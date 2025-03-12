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
        const { title, platform, year, price } = req.body;
        await gameService.create(title, platform, year, price);
        // Criado com sucesso
        res.status(201); // 201 Success
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
            res.sendStatus(204) // 204 No Content
        } else {
            res.sendStatus(400) // 400 Bad Request
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

export default { getAllGames, createGame, deleteGame };
