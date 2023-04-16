import { useContext } from "react";
import { ContextCriador } from "./criadorElementoContext";
import Button from '@mui/material/Button';
import { arrayMoveImmutable } from 'array-move';
import Configbox from "./configElementos/estiloBox";
import Estiloimg from "./configElementos/estiloImg";
export default function EditarElemento(props) {
    const elementos = useContext(ContextCriador)


  
    return (


        <div className="flex flex-col">
            <div className=" m-2">
                <div><h1 className="m-1">direçao Box</h1></div>

                <Configbox />
            </div>



            <div className="m-2">
                <div><h1 className="m-1">estilos imagem</h1></div>

                <Estiloimg />
            </div>


        </div>
    )
}