import { useDispatch,useSelector } from "react-redux"
import { fetchProdutos } from "../reducer/reducerProdutos"

import { useEffect } from "react"
export default function Testar(){
const produtoStatus = useSelector((state)=>state.reducerProdutos.status)
const produtos = useSelector((state)=>state.reducerProdutos.produtos)
const corta = produtos.slice(0,10)

const dispatch = useDispatch()
    useEffect(()=>{
if(produtoStatus === 'idle'){
    dispatch(fetchProdutos())
}
    },[produtoStatus,dispatch])
    console.log(corta)

    const elementos = corta.map(elemento =>(
        <h1>{elemento.title}</h1>
      
    ))
    const verificarback = async ()=>{
          const response = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste')
          const res = await response.json()  
          console.log(res)
    }
    return(
      <>{elementos}
      <button onClick={verificarback}>Verificar</button>
      </>
    )
}