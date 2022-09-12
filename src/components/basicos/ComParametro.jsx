import React from 'react'

export default function ComParametro(props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p><strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota}</strong></p>
      e está
      <strong> {status}!</strong>
    </div>
  )
}