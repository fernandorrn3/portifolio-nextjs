import Direcao from "./direcao"
import Espaco from "./espaco"
import Size from "./size"
import Alinhamento from "./alinhamento"
export default function Editelementos(){
    return(
        <div>
           <Direcao/>
           <Alinhamento/>
           <Espaco/> 
           <Size/>
        </div>
    )
}