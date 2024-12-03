import React from 'react';

const SentryPrueba = () => {
    const handleClick = () => {
        console.log("¡Botón presionado desde MiComponente!");
    };
    return <button onClick={() => {throw new Error("Un error a proposito");}}>Un error a proposito 😈</button>;
};

export default SentryPrueba;
