import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export default function Carrinho() {
    const [numero, setnumero] = useState()
    
    const selectCarrinho = useSelector((elemento) => elemento.reducercarrinho)
    const [nome, setNome] = useState('hidden')
    useEffect(() => {

        setnumero(selectCarrinho.length)
    }, [selectCarrinho])
    console.log(numero)

    const abreCarrinho = () => {
        

        setNome('flex-col absolute w-[25rem] bg-[red]  top-6')

    }

    const fechaCarrinho = () => {
        setNome('hidden')
    }


console.log(selectCarrinho)

    return (
        <div className="bg-[yellow] flex flex-col grid justify-items-end">

           
                <div onMouseOver={abreCarrinho} onMouseOut={fechaCarrinho}><h1 >Carrinho {numero}</h1></div>
                <div className={nome} onMouseOver={abreCarrinho} onMouseOut={fechaCarrinho}>
                  
               <CorpoCarrinho/>
            </div>


        </div>

    )
}




function CorpoCarrinho (){
    const selectCarrinho = useSelector((elemento) => elemento.reducercarrinho)
    return(
        <div>
{selectCarrinho.map((el,index) => {
    <div key={index} className="grid grid-cols-8"> 
    <div className="col-span-2"><h1>imagem</h1></div>
    <div className="col-span-4"><h1>{el.nome}</h1></div>
    <div className="col-span-2"><h1>{el.valor}</h1></div>
    </div>
   
})

}
        </div>
    )
}