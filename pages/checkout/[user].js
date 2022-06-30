import Layout from "../../components/layout"
import {
    PayPalScriptProvider,
 
    PayPalHostedFieldsProvider,
    PayPalHostedField,
    
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import Gerartoken from "../../lib/geratokenpaypal";
import Gerartokendinan from "../../lib/gerartokendinan";

export default function Produtos() {
const credencials = useSelector((state)=>state.reducercredential)
const produtos = useSelector((state)=> state.reducercarrinho)
const [clienttoken, setclienttoken] = useState()

    const router = useRouter()
    const { user } = router.query



    useEffect(() => {
        if (!user) {
            return
        }
      
      
        (async ()=>{
            const token = await Gerartoken(process.env.NEXT_PUBLIC_CLIENT_ID, process.env.NEXT_PUBLIC_SECRET)
            const tokencompradordinan = await Gerartokendinan(token)
            setclienttoken(tokencompradordinan) 
        })()
      


    }, [user])


    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
        "currency": "BRL",
        "components": "buttons,hosted-fields",
       "data-client-token":clienttoken
    };


    


    /*if (typeof window !== "undefined") {
if(credencials.length !== 0){
    localStorage.setItem('acesstoken', credencials[0].acesstoken)
    localStorage.setItem('tokenclient', credencials[0].tokenclient)
    initialOptions['data-client-token'] = credencials[0].tokenclient
    console.log('diferente de 0')
}else{
    const novotoken = localStorage.getItem('tokenclient')
    console.log(novotoken)
    initialOptions['data-client-token'] = novotoken
    console.log('igual a zero')
}
        
        
        }


console.log(initialOptions['data-client-token'])*/




    /* 
 
   const gerarorder = async ()=>{
 const res = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders',{
     method:'POST',
     headers:{
         'Content-Type':'application/json',
         Authorization: `Bearer ${tokenacesso}`
     },
     body: JSON.stringify({ 
     'intent': 'CAPTURE',
     'application_context':{
         'return_url': 'http://localhost:3000/checkout/fernandorrn'
     },
     'purchase_units': [
         {
             'amount': {
                 'currency_code': 'BRL',
                 'value': '100.00'
             }
         }
     ]
 })
 })
 
 const response = await res.json()
 settokenorder(response.id)
 console.log(response)
 
   }
 
   const pagarpaypal = async () =>{
 const response = await fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${tokenorder}/capture`,{
     method:'POST',
     headers:{
         'Content-Type': 'application/json',
         Authorization: `Bearer ${tokenacesso}`
     }
 })
   }*/

   

   



    

    



    return (
        <>

            <h1>pagina checkout</h1>
{clienttoken ? (
<PayPalScriptProvider options={initialOptions}>
<PayPalHostedFieldsProvider  createOrder={() => {
                    // Here define the call to create and order
                    return fetch(
                        "https://api-m.sandbox.paypal.com/v2/checkout/orders"
                    )
                        .then((response) => response.json())
                        .then((order) => order.id)
                        .catch((err) => {
                            // Handle any error
                        });
                }}>
<PayPalHostedField
                    id="card-number"
                    hostedFieldType="number"
                    options={{ selector: "#card-number" }}
                />
                <PayPalHostedField
                    id="cvv"
                    hostedFieldType="cvv"
                    options={{ selector: "#cvv" }}
                />
                <PayPalHostedField
                    id="expiration-date"
                    hostedFieldType="expirationDate"
                    options={{
                        selector: "#expiration-date",
                        placeholder: "MM/YY",
                    }}
                />
</PayPalHostedFieldsProvider>
</PayPalScriptProvider>):(<h1>Carregando...</h1>)}
           


        </>
    )



}

const Submit = () =>{
    return(
        <button>submit</button>
    )
}

Produtos.getLayout = function (page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
