import React from 'react'

export default (props) => {
    // const maximo = props.maximo;
    // const minimo = props.minimo;
    const{ minimo, maximo } = props; //É a mesma coisa do que está escrito em cima

    const sorteio = getNumeroAleatorio(minimo, maximo)
    return (
        <div>

        <h2>Valor aleatório</h2>
            <p>
                <strong>Valor mínimo: </strong> { minimo }
            </p>
            <p>
                <strong>Valor máximo: </strong> { maximo }
            </p>
            <p>
                <strong>Valor sorteado: </strong> { sorteio }
            </p>

        </div>
    )
}

function getNumeroAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}