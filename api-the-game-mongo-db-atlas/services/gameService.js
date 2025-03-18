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

    async create(title, year, price, descriptions) {
        try {
            const newGame = new Game({
                // title: title
                title,
                year,
                price,
                descriptions,
            });
            // metodo do mongoose para cadastrar
            await newGame.save();
            console.log(`Jogo cadastrado: \n${newGame}`);
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

    async update(id, title, year, price, descriptions) {
        try {
            await Game.findByIdAndUpdate(id, {
                title,
                year,
                price,
                descriptions,
            });
            console.log(`Game com a id: ${id} foi atualizado com sucesso!`);
        } catch (error) {
            console.log(error);
        }
    }

    // Função para listar um único jogo
    async getOne(id) {
        try {
            const game = await Game.findOne({ _id: id });
            return game;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new gameService();
