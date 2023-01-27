import React from 'react'
import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Aleatorio from "./Aleatorio";
import Card from "../layout/Card";
import './App.css'

export default () => (
    <div className="App">

        <h2>Fundamentos básicos Arrow</h2>

        <div className="Cards">
            <Card titulo="#04 -Desafio Aleatório" color="#FA6900">
                <Aleatorio minimo={1} maximo={10}/>
            </Card>

            <Card titulo="#03 -Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#02 -Segundo Componente" color="#E8B71A">
                <ComParametro titulo="Segundo Componente" aluno="Patrick" nota={9.3} status="Aprovado"/>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)