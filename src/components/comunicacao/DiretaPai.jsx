import React from "react";
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho nome="Gabriel" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Miguel" idade={14} ></DiretaFilho>
        </div>
    )
}