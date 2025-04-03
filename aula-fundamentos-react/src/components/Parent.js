import { Child } from "./Child";

export const Parent = () => {
    return (
        <>
            <div>
                <p><strong>Este é o componente pai</strong></p>
                {/* Importando o componente filho */}
                <Child></Child>
            </div>
        </>
    );
};
