import { useState } from "react";

export const Counter = () => {
    // let x = 0;
    // console.log(x);

    // x consulta o valor do estado
    // setX altera o valor do estado
    const [x, setX] = useState(0);

    return (
        <>
            <div>
                <p>Contador: {x} </p>
                {/* <button onClick={() => x + 1 && console.log(x)}>
                    Aumentar
                </button> */}
                <button onClick={() => setX(x + 1)}>
                    Aumentar
                </button>
            </div>
        </>
    );
};
