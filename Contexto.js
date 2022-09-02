import React from "react";

function convertTime(segundos){
    let minutes = parseInt(segundos/60);
    let seconds = segundos - minutes*60;
    return {
        minutes,seconds
    }
}

const meuContexto = React.createContext(0);

export {meuContexto, convertTime};