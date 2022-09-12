import React from "react";

export default function Fragmento(props) {
  return (
    <React.Fragment> {/* sempre que a gente nao quiser envolver com a div pode usar react fragment */}
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro</p>
    </React.Fragment>
  )
}