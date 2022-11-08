import { useDispatch, useSelector } from "react-redux"
import { fetchProdutos } from "../reducer/reducerProdutos"
import { addcart } from "../reducer/reducercarrinho"
import { useState } from "react"
import { updateCart } from "../reducer/reducercarrinho"
import { useEffect } from "react"
import Link from "next/link"
import { upActionProduto } from "../reducer/reducerProdutos"
import { upestado } from "../reducer/reducerProdutos"
export default function Produto() {
    const dispatch = useDispatch()
    const produtos = useSelector((state) => state.reducerProdutos.produtos)
    const produtosStatus = useSelector((state) => state.reducerProdutos.status)
    const carrinhoprodutos = useSelector((state) => state.reducercarrinho.carrinho)
    const [produtoAtualiza, setProdutoAtualiza] = useState()



    let contador = 0
    let inicio = 0
    let final = 0
    const novoArray = []

    //

    useEffect(() => {
        if (produtosStatus === 'idle') {
            dispatch(fetchProdutos())
        }
    }, [produtosStatus, dispatch])



    const comprar = (e) => {
        //const quantidade = e.target.parentElement.previousElementSibling.textContent
        const quantidade = e.target.parentElement.previousElementSibling.lastChild.lastChild.lastChild.lastChild.textContent
        const valor = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        const nome = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const id = e.target.id
        const transforma = parseInt(quantidade) + 1

        const serchproduto = carrinhoprodutos.filter(el => el.id === id)
        setProdutoAtualiza(serchproduto)
        if (serchproduto.length > 0) {
            dispatch(updateCart(serchproduto[0]))
            dispatch(upActionProduto(serchproduto[0]))

        } else {
            dispatch(addcart({
                nome: nome,
                valor: valor,
                quantidade: transforma,
                id: id

            }))
            dispatch(upActionProduto({
                nome: nome,
                valor: valor,
                quantidade: quantidade,
                id: id

            }))
        }

    }



    const produtosElementos = produtos.map((ele, index, arr) => (


        <div className=
            "bg-[green] w-[15rem] sm:w-[15rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] mx-1"
            key={index} >

            <div className="nome-produto" ><h1>{ele.title}</h1></div>
            <div className="valor-produto" ><h1>{ele.unit_price}</h1></div>
            <div className="quantidade-produto"><Quantidadeprt valor={ele.quantity} /></div>

            <div><button className="Comprar" id={ele.id} onClick={comprar}>Comprar</button> </div>

            <div><Link href={'/cart'}><a>finalizar compra</a></Link></div>
        </div>


    ))


    for (let i = 0; i <= produtosElementos.length; i++) {

        contador++;

        if (contador === 2) {
            contador = 0
            inicio = final
            final = inicio + 2
            const novo = produtosElementos.slice(inicio, final)
            novoArray.push(novo)
        }
    }

    for (let i = 0; i <= novoArray.length; i++) {
        if (novoArray[i]) {
            if (novoArray[i].length < 2) {
                novoArray[i].shift()
            }
        }


    }




    return (
        <div className="grid grid-cols-12 col-start-2 col-end-12 mx-1 my-1 min-h-screen">

            <div className="hidden sm:flex col-start-1 col-end-4 bg-[orange]">
                <h1>filter produto</h1>
            </div>
            <div className="flex flex-col col-start-1 col-end-13 sm:col-start-4 ">
                {novoArray.map((eli, index, arr) => {
                    return (
                        <div className="flex flex-row w-[100%] justify-center my-1" key={index}  >
                            {eli}
                        </div>
                    )
                })}


            </div>
        </div>



    )
}




const Quantidadeprt = (props) => {
    const produtos = useSelector((state) => state.reducerProdutos.produtos)
    const [adicionado, setadicionado] = useState(false)


    const addQuantidade = () => {

        if (adicionado) {
            setadicionado(false)
        } else {
            setadicionado(true)
        }
    }
    return (
        <div>
            <div>
                <button onClick={addQuantidade}>Quantidade</button>
            </div>
            {adicionado ?

                <div className="flex flex-col bg-[yellow] visible absolute">
                    <div>
                        <h1>{props.valor} unidades</h1>
                    </div>
                </div>

                :
                <div className="flex flex-col bg-[yellow] invisible absolute">
                    <div>
                        <h1>{props.valor} unidades</h1>
                    </div>
                </div>
            }
        </div>
    )


}


//add produto carrinho
//pagina de confirmar order
//pagina check-out




//controle de estoque
//produtos mas vendidos
//produtos menos vendidos