import React from "react"

function Exemplo01(props) {
    const {nome,idade} = props;
//  const {nome, nota} = props;
//  const situacao = nota >= 5 ? 'aprovado' : 'resprovado'
    return(
        <div>
            <h1>
                Primeiro componente
            </h1>
            <p>
                Nome: {nome}
            </p>
            <p>
                Idade: {idade}
            </p>
            {/* <p>
                sua nota é: {nota}
            </p>
            <p>
                situação: {situacao}
            </p> */}
        </div>
        
        
    )
}



export default Exemplo01