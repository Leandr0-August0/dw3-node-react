import styles from "@/components/LoginContent/LoginContent.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { Login } from "@/services/auth";

const LoginContent = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        // Aqui irá chamar a função de login
		const result = await Login(email, password)
		if (result.success) {
			alert("Login efetuado com sucesso!");
			router.push("http://localhost:3000/home");
		} else {
			alert('Falha ao efetuar o login.')
		}
    };

    return (
        <div className={styles.loginContent}>
            {/* LOGO */}
            <div className={styles.logo}>
                <img
                    src="/images/thegames_logo.png"
                    className={styles.logoImg}
                    alt="The Games"
                />
            </div>
            {/* LOGIN CARD */}
            <div className={styles.loginCard}>
                {/* LOGIN CARD HEADER */}
                <div className={styles.loginCardHeader}>
                    <h3>Faça seu login:</h3>
                </div>
                {/* LOGIN CARD BODY */}
                <div className={styles.loginCardBody}>
                    <form className="formPrimary" onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            className={`${styles.input} ${"inputPrimary"}`}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Digite sua senha"
                            className={`${styles.input} ${"inputPrimary"}`}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={`${styles.input} ${"btnPrimary"}`}
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginContent;
