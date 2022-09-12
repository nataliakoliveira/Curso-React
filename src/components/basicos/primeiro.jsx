//se tem JSX precisa ter o import do react
import React from 'react'

export default function Primeiro() {
  const msg = 'Seja bem vindo(a)'
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p> {msg} </p>
    </div>
  )
}