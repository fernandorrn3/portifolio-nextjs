//pegar o clientId, pegar o acesstoken
//gerar token de chamada api
//usar esse token para chamar o token do comprador




//gerar order na pagina de confirmar nao ira capturar o endereço de entrega


import { useSelector } from "react-redux"
import Layout from "../../components/layout"
import { useEffect,useState } from "react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addcredencial } from "../../reducer/reducercredential"
import Gerartoken from "../../lib/geratokenpaypal"
import Gerartokendinan from "../../lib/gerartokendinan"
export default function Confirma(){

const dispatch = useDispatch()

    useEffect(async ()=>{
    /*const auth = Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_SECRET).toString("base64");
const res = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token",{
    method:'POST',
    headers:{
        Authorization: `Basic ${auth}`
    },
    body: "grant_type=client_credentials",
})

const response = await res.json()*/

const token = await Gerartoken(process.env.NEXT_PUBLIC_CLIENT_ID, process.env.NEXT_PUBLIC_SECRET)
const tokencompradordinan = await Gerartokendinan(token)






dispatch(addcredencial({
    acesstoken:token,
    tokenclient:tokencompradordinan
}))


    },[])
    const selecionar = useSelector((state)=> state.reducercarrinho)
    console.log(selecionar)

    
    return(
        
        <>
        <h1>confirmar compra</h1>
        <Link href={'/checkout/fernandorrn'} ><a>confirmar pagamento</a></Link>
        </>
        
    )
}


Confirma.getLayout = function(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}