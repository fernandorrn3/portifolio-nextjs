import { useDispatch,useSelector } from "react-redux"
import { fetchProdutos } from "../reducer/reducerProdutos"
import { useRef } from "react"

import { useEffect } from "react"
import { useState } from "react"
export default function Testar(){
const produtoStatus = useSelector((state)=>state.reducerProdutos.status)
const produtos = useSelector((state)=>state.reducerProdutos.produtos)
const referencias = useRef([])

const dispatch = useDispatch()
    useEffect(()=>{
if(produtoStatus === 'idle'){
    dispatch(fetchProdutos())
}
    },[produtoStatus,dispatch])
    
    const testarref = () =>{
console.log(referencias.current)
    }

    const elementos = produtos.map((elemento, index) =>
        <div key={index} ref={referencias}> 
        <h1>{elemento.title}</h1>
        <button onClick={testarref}>Testar-Ref</button>
        </div>
    )
    const verificarback = async ()=>{
          const response = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste')
          const res = await response.json()  
          console.log(res)
    }
    return(
      <>{elementos}
     
      </>
    )
}