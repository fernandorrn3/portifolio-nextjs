import { useSelector } from "react-redux"
import { useState, useEffect} from "react"
import { addTotal } from "../../../reducer/reducercarrinho"
import { useDispatch } from "react-redux"
export default function Carrinho() {

    const [numero, setnumero] = useState()
    
    const selectCarrinho = useSelector((elemento) => elemento.reducercarrinho.carrinho)
   
    const [nome, setNome] = useState('flex-col absolute w-[20rem] bg-[red] top-6 right-[7%] hidden')
    useEffect(() => {

        setnumero(selectCarrinho.length)
    }, [selectCarrinho])


    const abreCarrinho = () => {
        setNome('flex-col absolute w-[20rem] bg-[red] top-6 right-[8.3%]')
    }

    const fechaCarrinho = () => {
        setNome('hidden')
    }


    return (
        <div>


            <div onMouseOver={abreCarrinho} onMouseOut={fechaCarrinho}><h1 >Carrinho {numero}</h1></div>
            <div className={nome} onMouseOver={abreCarrinho} onMouseOut={fechaCarrinho}>

                <CorpoCarrinho />
            </div>


        </div>

    )
}




function CorpoCarrinho() {
    const dispatch = useDispatch()
    const selectCarrinho = useSelector((elemento) => elemento.reducercarrinho.carrinho)
    const selectTotal = useSelector(total => total.reducercarrinho.total)
    const [totalCompra, setTotalCompra] = useState()
 
    useEffect(()=>{
        if(selectCarrinho.length > 0 ){
            
            const precoItens = selectCarrinho.map((el)=>{
                return parseInt(el.valor) * parseInt(el.quantidade)
            })
            
            const total = precoItens.reduce((total,num)=>{
                return total + num
            })
           setTotalCompra(total)
dispatch(addTotal(total))

        }


    },[selectCarrinho])

  
    return (
        <div className="flex flex-col">

            {selectCarrinho.map((el, index) => {
                return (
                    <div key={index} className="grid grid-cols-8">
                        <div className="col-span-2"><h1>imagem</h1></div>
                        <div className="col-span-4"><h1>{el.nome}</h1></div>
                        <div className="col-span-2"><h1>{el.valor}</h1></div>
                    </div>
                )
            })}
            <div><h1>o total da compra é {totalCompra} reais</h1></div>
        </div>
    )
}