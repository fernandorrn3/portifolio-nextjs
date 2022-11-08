import { useState } from "react"
export default function CalculoDeFrete() {
  const [cep,setCep] = useState()
  const calcular = async () => {
    console.log(cep)
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'frete/frete',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(cep)
})

const response = await res.json()
console.log(response)
  }
  return (
    <div className="flex flex-col">
      <div>
        <h1>opcao de entrega</h1>
      </div>
      <div>
        <input type={'text'} placeholder={'cep destino'} onChange={(e)=>setCep(e.target.value)} /><br/>
        <button onClick={calcular}>Calcular frete</button>
      </div>

    </div>
  )
}