import Layout from "../../components/layout";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addid } from "../../reducer/reduceridorder";
import Link from "next/link";
export default function Confirma() {
    const [id, setorderid] = useState()
    const dispatch = useDispatch()

    const resultado = useSelector((state) => state.reducercarrinho)
  
   
      
console.log(resultado.carrinho)

    const finalizarCompra = async () =>{
       /* const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
            },
            body: JSON.stringify({
                'items': resultado.carrinho

            })
        });
        const res = await response.json()
        console.log(res)
        dispatch(addid({id:res.id}))*/
    }
    return (
<div className="flex flex-col min-h-screen"> 
        <div className="grid grid-cols-12">
            <div className="col-start-2 col-end-7 bg-[red]">
                <div><h1>sacola de compras</h1></div>
                </div>
            <div className="col-start-7 col-end-12 bg-[green]">
                <div><h1>Resumo</h1></div>
                <div><button onClick={finalizarCompra}><Link href={'/checkout/fernandorrn'}>Finalizar Compra</Link></button></div>
                </div>
            
        </div>
        </div>
    )
}

Confirma.getLayout = function (page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


