import { useState } from "react";

export const Form = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [visible, setVisible] = useState(false);

    // função para evitar o comportamento padrão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("nome", nome);
        console.log("email", email);
        console.log("senha", senha);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px 200px",
                }}
            >
                <h3>Form cadastro</h3>
                <div className="form-input">
                    <input
                        type="text"
                        value={nome}
                        placeholder=""
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <label htmlFor="nome">Nome *</label>
                </div>
                <br />
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <br />
                <button type="submit" onClick={() => setVisible(!visible)}>
                    Cadastrar
                </button>
                <div style={{ display: visible ? "block" : "none" }}>
                    <p>Nome: {nome}</p>
                    <p>Email: {email}</p>
                    <p>Senha: {senha}</p>
                </div>
            </form>
        </>
    );
};
