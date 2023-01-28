import React from 'react'
import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Fragmento from "./Fragmento";
import Aleatorio from "./Aleatorio";
import Card from "../layout/Card";
import './App.css'
import Familia from "./Familia";
import FamilaMembro from "./FamilaMembro";
import ListaAlunos from "../repeticao/ListaAlunos";
import TabelaProdutos from "../repeticao/TabelaProdutos";
import ParOuImpar from "../condicional/ParOuImpar";
import UsuarioInfo from "../condicional/UsuarioInfo";
import DiretaPai from "../comunicacao/DiretaPai";
import IndiretaPai from "../comunicacao/IndiretaPai";
import Input from "../formulario/Input";

export default () => (
    <div className="App">

        <h2>Fundamentos básicos Arrow</h2>

        <div className="Cards">

            <Card titulo="#11 - Componente Controlado" color="#9400D3">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#D2691E">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#00DD36">
              <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#00A212">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'fer@gmail.com' }}></UsuarioInfo>
                <UsuarioInfo/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#00D3A28">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Lista Alunos Com Repetição" color="#00C8F8">
               <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00D9B4">
                <Familia sobrenome="Ferreira" >
                    <FamilaMembro nome="Pedro" />
                    <FamilaMembro nome="João" />
                    <FamilaMembro nome="Maria" />
                </Familia>
            </Card>

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
    </div>
)