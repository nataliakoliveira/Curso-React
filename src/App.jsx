import React from "react";
import "./App.css"

import Aleatorio from "./components/Aleatorio";
import Card from "./layout/Card";
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/fragmento'

export default function App(_) {
  return (
    <div className="app">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#04 - Desafio Aleatório">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com parâmetro">
          <ComParametro
            titulo='Situação do aluno'
            aluno="Natalia Oliveira"
            nota={9.3} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}


