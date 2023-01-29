import React, {useState} from "react";
import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min, max, batata) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return batata.includes(aleatorio) ? gerarNumeroNaoContido(min, max, batata) : aleatorio // includes verifica se aquele valor está contido dentro do array
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, []) // este array é o estado inicial do reduce
            .sort((n1, n2) => (n1 - n2))
        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const [numeros, setNumeros] = useState(Array(qtde).fill(0));

    return (
        <div className="Mega">
            <div className="Titulo">
                <h2>Megasena</h2>
            </div>
            <div className="Numeros">
                <h3>{numeros.join('-')}</h3>
            </div>
            <div className="QuantidadeNumeros">
                <label>Qtde de números </label>
                <input type="number" value={qtde}
                       onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={
                _ => setNumeros(gerarNumeros(qtde))
            }>Gerar números
            </button>
        </div>
    )

}


