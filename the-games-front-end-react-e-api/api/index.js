import express from "express";
import mongoose from "mongoose";
import Games from "./models/Games.js"
import User from "./models/Users.js"
const app = express();

// Importando e configurando o cors
import cors from "cors";
// const whiteList = ['http://localhost:3000']
app.use(cors());

// Importando as rotas (endpoints) de Games
import gameRoutes from './routes/gameRoutes.js'
// Importando as rotas (endpoints) de Usuários
import userRoutes from './routes/userRoutes.js'

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
// setando tipo de resposta
app.use(express.json());
// usando as rotas
app.use('/', gameRoutes)
app.use('/', userRoutes)

// Iniciando a conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/thegames")
// mongoose.connect("mongodb+srv://Leandro:0fc64593-8719-4ad3-945c-f69d6b3d1071@api-the-game.7jjhq.mongodb.net/?retryWrites=true&w=majority&appName=api-the-game"); //api-thegames é o nome do banco de dados

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
