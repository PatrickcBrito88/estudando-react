import React from "react";
import './Contador.css'
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
                passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} onPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }
}