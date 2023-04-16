import { createElement } from "react";
import { useContext } from "react";
import { ContextCriador } from "./criadorElementoContext";
export default function Elementos(props) {
    const elementos = useContext(ContextCriador)
   




    return (
        <>
           
         {elementos.elementoCriado.map((el)=>{
            return(
                
             <div>{el.elemento()}</div> 
            )
         })}
        </>

    )
}