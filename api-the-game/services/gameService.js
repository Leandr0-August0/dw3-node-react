import Game from "../models/Games.js";

class gameService {
    async getAll() {
        try {
            const games = await Game.find();
            return games;
        } catch (error) {
            console.log(error);
        }
    }

    async create(title, platform, year, price) {
        try {
            const newGame = new Game({
                // title: title
                title,
                platform,
                year,
                price,
            });
            // metodo do mongoose para cadastrar
            await newGame.save();
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await Game.findByIdAndDelete(id);
            console.log(`Game com a id: ${id} foi deletado com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new gameService();
