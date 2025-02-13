import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // res.send('API inicializada com sucesso!')
  const games = [
    {
      title: "Game 1",
      year: 2020,
      plataform: "PC",
      price: 50.0,
    },
    {
      title: "Game 2",
      year: 2024,
      plataform: "PS5",
      price: 200.0,
    },
  ];
  res.json(games);
});

const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
