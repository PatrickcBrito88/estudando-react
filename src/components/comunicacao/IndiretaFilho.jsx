import React from "react";
import IndiretaFilho from './IndiretaFilho'
export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('Joao', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}