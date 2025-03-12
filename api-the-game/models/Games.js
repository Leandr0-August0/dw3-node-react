import mongoose from "mongoose";
const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number,
});

// Cria a coleção Games no banco de dados
// Vai criar a coleção no plural por se tratar de uma coleção de games
const Game = mongoose.model("Game", gameSchema);

export default Game;
