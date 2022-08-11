import VerificaLogin from "./elementos/verificalogin"
import Carrinho from "./elementos/carrinho/carrinho"


const abrirFechar = () =>{

}

export default function Navbar(){
    
    return(
       
<div className="grid grid-cols-12 bg-[yellow] col-start-2 col-end-12">

<div className="hidden sm:col-span-5 sm:flex">

<VerificaLogin />
    
</div>
<div className="hidden sm:col-span-7 sm:flex sm:justify-end">

<Carrinho/>

</div>

<div className="sm:hidden col-span-12 flex flex-col">
<div><button onClick={abrirFechar}>Abrir/fechar</button></div>

</div>

       </div>

       
    )
}






