import mongoose from "mongoose";
// chave de acesso atlas
// 0fc64593-8719-4ad3-945c-f69d6b3d1071
// yvpuigsq - chave pública



// documento aninhado
const descriptionSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: [descriptionSchema] // array de documentos
});

// Cria a coleção Games no banco de dados
// Vai criar a coleção no plural por se tratar de uma coleção de games
const Game = mongoose.model("Game", gameSchema);

export default Game;
