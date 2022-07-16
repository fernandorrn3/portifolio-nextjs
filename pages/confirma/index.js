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
                'Authorization': 'Bearer TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933'
            },
            body: JSON.stringify({
                'items': [
                    {
                        'title': "camisa e short",
                        'quantity': 2,
                        'unit_price': 75.77,
                       

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


//MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB