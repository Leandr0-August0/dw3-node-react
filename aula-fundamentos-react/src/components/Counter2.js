import { useState } from "react";

export const Counter2 = () => {
    const [x, setX] = useState(0);

    return (
        <>
            <div>
                <p>Counter: {x}</p>
                <button onClick={() => setX(x + 1)}>Increment</button>
                <button onClick={() => setX(x - 1)}>Decrement</button>
                <button onClick={() => setX(0)}>Zero</button>
            </div>
        </>
    );
};
