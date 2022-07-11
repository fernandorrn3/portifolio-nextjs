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



    useEffect(async () => {
        if (!resultado) {
            return
        }
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'Authorization': 'Bearer TEST-8858163312914307-071117-a4ff00221a96edaed4b73410e09df6b1-1158821207'
            },
            body: JSON.stringify({
                'items': [
                    {
                        'title': "Meu produto",
                        'quantity': 1,
                        'unit_price': 65.77,
                       

                    }
                ]

              
                
            })
        });

        const res = await response.json()
        console.log(res)
        setorderid(res)


    }, [])



    const guardarid = () => {
        console.log(id.id)

        dispatch(addid({
            guardarid: id.id
        }))

    }
    return (

        <>
            <h1>confirma-pagamento</h1>
            <div><Link href={'./checkout/fernandorrn'}><a>confirmar-order</a></Link> </div>
            <div><button onClick={guardarid} >guardar-id</button></div>
        </>

    )
}

Confirma.getLayout = function (page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}