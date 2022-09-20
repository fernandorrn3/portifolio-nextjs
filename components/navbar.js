import VerificaLogin from "./elementos/verificalogin"
import Carrinho from "./elementos/carrinho/carrinho"
import { useEffect, useState} from "react"

export default function Navbar() {
    const [paiMenu,setPaiMenu] = useState('hidden sm:grid grid-cols-12 col-start-2 col-end-12')
    const [abrirEfechar, setAbrirEfechar] = useState(false)
    

    useEffect(() => {
        abrirEfechar ? setPaiMenu('grid grid-cols-12 col-start-2 col-end-12') : 
        setPaiMenu('hidden sm:grid grid-cols-12 col-start-2 col-end-12')
    }, [abrirEfechar])

    const abrirFechar = () => {
        abrirEfechar ? setAbrirEfechar(false) : setAbrirEfechar(true)
        
    }
    return (

        <div className="grid grid-cols-12 bg-[yellow] ">
            
              <div className="sm:hidden col-span-12 flex flex-col">
                <div><button onClick={abrirFechar}>Abrir/fechar</button></div>
            </div>
            <div className={paiMenu}>
                <div className='col-span-5 flex '>
                    <VerificaLogin />
                </div>

                <div className='col-span-7 flex justify-end'>
                    <Carrinho />
                </div>
            </div>
          

        </div>


    )
}






