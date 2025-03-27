import userService from "../services/userServices.js";
import jwt from "jsonwebtoken";
const JWTSecret = "apigamessecret";

// Método para cadastrar um usuário
const newUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await userService.create(name, email, password);
        res.sendStatus(201)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno do servidor. (newUser)" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Se o email não está vazio
        if (email != undefined) {
            // Busca usuário
            const user = await userService.getOne(email);
            if (user != undefined) {
                // Senha correta (bcrypt compare)
                if (user.password == password) {
                    // Gera token
                    jwt.sign(
                        { id: user._id, email: user.email },
                        JWTSecret,
                        { expiresIn: "48h" },
                        (error, token) => {
                            if (error) {
                                res.status(400).json("Erro ao gerar o token"); // Bad request
                            } else {
                                res.status(200).json({ token: token }); // OK
                            }
                        }
                    );
                    // Senha incorreta
                } else {
                    res.status(401).json("Senha incorreta"); // Unauthorized
                }
            } else {
                res.status(404).json("Usuário não encontrado"); // Not found
            }
        } else {
            res.status(400).json("Email não pode ser vazio"); // Bad request
        }
    } catch (error) {
        res.sendStatus(500).json({ error: "Erro interno do servidor. (loginUser)" });
    }
};

export default { JWTSecret, newUser, loginUser };
