import styles from "@/components/CreateContent/CreateContent.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { axiosConfig } from "@/services/auth";

const CreateContent = () => {
    // criando os stados para as informações do jogo
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação do formulário
        if (title && platform && genre && rating && year && price !== "") {
            const game = {
                title: title,
                year: year,
                price: price,
                descriptions: {
                    platform: platform,
                    genre: genre,
                    rating: rating,
                },
            };
            // console.log(game)
            try {
                const response = await axios.post(
                    "http://localhost:4000/games",
                    game,
                    axiosConfig
                );
                if (response.status === 201) {
                    alert("Jogo cadastrado com sucesso!");
                }
            } catch (error) {
                console.log(error);
            } finally {
                router.push("http://localhost:3000/home");
            }
        }
    };

    return (
        <div className={styles.createContent}>
            <div className="title">
                <h2>Cadastrar novo jogo</h2>
            </div>
            <form
                id="createForm"
                className="formPrimary"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Insira o título do jogo"
                    className="inputPrimary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="platform"
                    id="platform"
                    placeholder="Insira a plataforma do jogo"
                    className="inputPrimary"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                />
                <input
                    type="text"
                    name="genre"
                    id="genre"
                    placeholder="Insira o gênero do jogo"
                    className="inputPrimary"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <input
                    type="text"
                    name="rating"
                    id="rating"
                    placeholder="Insira a classificação do jogo"
                    className="inputPrimary"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <input
                    type="number"
                    name="year"
                    id="year"
                    placeholder="Insira o ano do jogo"
                    className="inputPrimary"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Insira o preço do jogo"
                    className="inputPrimary"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="submit"
                    value="Cadastrar"
                    id="createBtn"
                    className="btnPrimary"
                />
            </form>
            {/* <div style={{color: "white"}}>
				{title} <br />
				{platform} <br />
				{genre} <br />
				{rating} <br />
				{year} <br />
				{price}
			</div> */}
        </div>
    );
};

export default CreateContent;
