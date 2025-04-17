import { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("green");
    const [ableAuto, setAbleAuto] = useState(false);

    const TrafficAutomatic = (able) => {
        if (able === true) {
            setTimeout(() => {
                setColor("yellow");
            }, 2000);
            setTimeout(() => {
                setColor("red");
            }, 2500);
            setTimeout(() => {
                setColor("green");
            }, 4500);
        }
    };

    TrafficAutomatic(ableAuto);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h3>Semáforo</h3>
                <br />
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color === "red" ? color : "gray",
                        borderRadius: "50%",
                    }}
                >
                    {" "}
                </div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color === "yellow" ? color : "gray",
                        borderRadius: "50%",
                    }}
                >
                    {" "}
                </div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: color === "green" ? color : "gray",
                        borderRadius: "50%",
                    }}
                >
                    {" "}
                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        style={{ color: "black" }}
                        onClick={() => setColor("red")}
                    >
                        Pare{" "}
                    </button>
                    <button
                        style={{ color: "black" }}
                        onClick={() => setColor("yellow")}
                    >
                        Atenção{" "}
                    </button>
                    <button
                        style={{ color: "black" }}
                        onClick={() => setColor("green")}
                    >
                        Siga{" "}
                    </button>
                </div>
                <div>
                    <button
                        style={{ color: "black" }}
                        onClick={() => setAbleAuto(!ableAuto)}
                    >
                        Automatico
                    </button>
                </div>
            </div>
        </>
    );
};
