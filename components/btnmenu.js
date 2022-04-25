import { useState } from "react"
export default function Botaomenu({setvalor,valor}){


const menu = () =>{
    valor ? (setvalor(false)) : (setvalor(true))

}

    return(
        <button onClick={menu} >botao menu</button>
    )
}