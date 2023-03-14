import { useState } from "react"

export default function StateComponent() {
    const [quantity,setQuantity] = useState(35);

  
  return (
    <div>
      <header>
        <h1>Durum</h1>
        <button className="btn btn-success" onClick={()=>{setQuantity(70)}}>Değiştir</button> <br />
        <button className="btn btn-success" onClick={()=>{setQuantity(35)}}>Geri Al</button>
        <h3>{quantity}</h3>
      </header>
    </div>
  );
}