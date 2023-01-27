import ReactDom from 'react-dom';
import React from 'react'
import './index.css' //import relativo
import App from './components/basicos/App'

const el = document.getElementById('root')
ReactDom.render(
    <App />
    ,
    el)
