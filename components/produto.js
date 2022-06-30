import { useDispatch,useSelector } from "react-redux"
import { addcart } from "../reducer/reducercarrinho"
import { useRef, useState} from "react"
import Link from "next/link"
export default function Produto(){
    const dispatch = useDispatch()
    const elementoproduto = useRef()

    const carrinhoprodutos = useSelector((state)=>state.reducercarrinho)

    const testarstore = ()=>{
        console.log(carrinhoprodutos)
    }
 
    const comprar = (e) =>{
console.log(elementoproduto.current.childNodes[0].innerText)
const nome = elementoproduto.current.childNodes[0].innerText
const valor = elementoproduto.current.childNodes[1].innerText
const quantidade = elementoproduto.current.childNodes[2].innerText

dispatch(addcart({
    nome:nome,
    valor:valor,
    quantidade:quantidade,
    adicionado:false
}))
    }
    return(
        <>
        <div ref={elementoproduto}  key={0}> 
        <div className="nome-produto"><h1>Nome-produto</h1></div>
        <div className="valor-produto"><h1>100.00</h1></div>
        <div className="quantidade-produto">1</div>

       <div><button className="Comprar" onClick={comprar}>Comprar</button> </div> 
        <div><button className="Comprar" onClick={testarstore}>testar</button></div>
        <div><Link href={'/confirma'}><a>finalizar compra</a></Link></div>
        </div>
      
        </>
    )
}