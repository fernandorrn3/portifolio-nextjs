import { useState } from "react"
import { useDispatch } from 'react-redux'
import { abrirEfechar } from "../../reducer/reducermenu"

export default function Botaomenu(){
    const dispatch = useDispatch()
   
const [valor,setvalor ] = useState(false)

const menu = () =>{
    if(valor){
        setvalor(false)
        dispatch(abrirEfechar({
        valor
        }))
    }else{
        setvalor(true)
        dispatch(abrirEfechar({
            valor
        }))
    }

}

    return(
        <button onClick={menu} >botao menu</button>
    )
}