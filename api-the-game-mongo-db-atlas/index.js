import express from "express";
import mongoose from "mongoose";
import Games from "./models/Games.js";
const app = express();

// Importando as rotas (endpoints) de games
import gamesRoutes from "./routes/gameRoutes.js";

// Configurando o express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gamesRoutes);

// INICIANDO A CONEXÃO COM O BANCO DE DADOS DO MONGODB
mongoose.connect("mongodb+srv://Leandro:0fc64593-8719-4ad3-945c-f69d6b3d1071@api-the-game.7jjhq.mongodb.net/?retryWrites=true&w=majority&appName=api-the-game"); //api-thegames é o nome do banco de dados

app.get("/", (req, res) => {
    res.send('API inicializada com sucesso!')
    // const games = [
    //     {
    //         title: "Game 1",
    //         year: 2020,
    //         plataform: "PC",
    //         price: 50.0,
    //     },
    //     {
    //         title: "Game 2",
    //         year: 2024,
    //         plataform: "PS5",
    //         price: 200.0,
    //     },
    // ];
    // res.json(games);
});

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`API rodando em http://localhost:${port}`);
    }
});
