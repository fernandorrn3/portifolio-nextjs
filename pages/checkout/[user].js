import Layout from "../../components/layout"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import {useRouter} from 'next/router'



export default function Produtos(){
    const router = useRouter()
    const { user } = router.query
    const base = "https://api-m.sandbox.paypal.com";
    useEffect(async ()=>{
if(!user){
    return 
}

const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + '/salvartoken' + '/pegartoken/' +  user )

const result = await res.json()

const tokenChamada = result.mensagem.token.codigo

console.log(tokenChamada)
//pegar token de acesso para fazer chamadas a api da base de dados
//usar esse token para gerar 1 token dinamico do cliente

const response = await fetch(`${base}/v1/identity/generate-token`, {
    method: "post",
    headers: {
      Authorization: `Bearer A21AAImsNoAmDaWYjBMI84jYDXlhvEW1R0OFd2spe5KZZRCknKJSeriEOLJC-Ln8hhgDckuDkDF6jSFlytHTJUW9ycREdVRbA`,
      "Accept-Language": "en_US",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data)
    },[router])

return(
  <><h1>pagina checkout</h1>
  
 
  
  </>
  
)
 
    
}

Produtos.getLayout = function(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}
