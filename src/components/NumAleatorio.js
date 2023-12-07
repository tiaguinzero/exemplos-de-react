import React from "react";

function NumAleatorio(props){
    const { min, max } = props;
    let res = Math.floor(Math.random() * (max - min)) + min;
    console.log("num="+res);

    return(
        <div>
            <h1>Número Aleatorio: { res }</h1>
        </div>
    )
}

export default NumAleatorio