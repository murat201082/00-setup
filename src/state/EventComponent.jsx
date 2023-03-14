import { useState } from "react"

export default function EventComponent() {
  

    const handle = () => {
        alert('Kotarıyor')
    }
    const deal = (input) => {
        alert('Uğraşılıyor' + input)
    }
    const manage = (event) => {
        alert(`işletiliyor' + ${event.target.id }+ " " + ${event.target.tagName}`)
    }
  return (
    <div>
      <header>
        <h1>Biçim</h1>
        <button onClick={() => alert("içleniyor")}>Çizgi İçi</button> <br />
        <button class='btn btn-danger'onClick={handle}>Ok</button><br />
        <button class='btn btn-secondary'onClick={() => deal('Girdi')}>Değiştiren</button><br />
        <button id="manager" class='btn btn-primary'onClick={(event) => manage(event)}>Olay</button><br />
      </header>
    </div>
  );
}
