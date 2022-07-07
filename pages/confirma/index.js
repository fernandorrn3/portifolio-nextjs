import Layout from "../../components/layout";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { addid } from "../../reducer/reduceridorder";
import Link from "next/link";
export default function Confirma(){
    const [id,setorderid] = useState()
    const dispatch = useDispatch()

const resultado = useSelector((state) => state.reducercarrinho)



useEffect(async ()=>{
if(!resultado){
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
                'title': resultado[0].nome,
                'quantity':  parseInt( resultado[0].quantidade),
                'unit_price': parseInt(resultado[0].valor) 
            }
        ],
        'back_urls':{
          'success': 'https://portifolio-nextjs-alpha.vercel.app/api/mercadopago/' + 'usuario'
        },
    })
});

const res = await response.json()
        console.log(res)
       setorderid(res)


},[])

   

     const guardarid = () =>{
        console.log(id.id)

        dispatch(addid({
            guardarid:id.id
        }))
       
      }
    return(

        <>
        <h1>confirma-pagamento</h1>
        <div><Link href={'./checkout/fernandorrn'}><a>confirmar-order</a></Link> </div>
        <div><button onClick={guardarid} >guardar-id</button></div>
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