// "use client";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeContent = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get("http://localhost:4000/games");
                setGames(response.data.games);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        // Invocando a função
        fetchGames();
    }, []); // Dependencia do useEffect

    // Função para excluir jogo
    const deleteGame = async (gameId) => {
        try {
            const response = await axios.delete(
                `http://localhost:4000/games/${gameId}`
            );
            if (response.status === 204) {
                alert("Jogo excluido com sucesso!");
                setGames(games.filter((game) => game._id !== gameId));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={styles.homeContent}>
                {/* CARD LISTA DE JOGOS */}
                <div className={styles.listGamesCard}>
                    {/* TITLE */}
                    <div className={styles.title}>
                        <h2>Lista de jogos</h2>
                    </div>
                    <div className={styles.games} id={styles.games}>
                        <Loading loading={loading} />
                        {/* Lista de jogos irá aqui */}
                        {games.map((game) => (
                            <ul key={game._id} className={styles.listGames}>
                                <div className={styles.gamesImg}>
                                    <img
                                        src="images/game_cd_cover.png"
                                        alt="Cover do jogo"
                                    />
                                </div>
                                <div className={styles.gameInfo}>
                                    <h3>{game.title}</h3>
                                    <li>{game.descriptions.platform}</li>
                                    <li>{game.descriptions.genre}</li>
                                    <li>{game.descriptions.rating}</li>
                                    <li>{game.year}</li>
                                    <li>
                                        {game.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </li>
                                    {/* Botão para excluir */}
                                    <button
                                        className={styles.btnDel}
                                        onClick={() => {
                                            const confimed = window.confirm(
                                                "Tem certeza que deseja deletar esse jogo?"
                                            );
                                            if (confimed) {
                                                deleteGame(game._id);
                                            }
                                        }}
                                    >
                                        Deletar
                                    </button>
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContent;
