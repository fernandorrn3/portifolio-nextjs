import { useState } from "react"
import Addtoken from "../components/elementos/addtoken"
export default function Gerar(props){
    const [token,setToken] = useState()
    const [clientid,setclientid] = useState()
    const [acesstoken,setacesstoken] = useState()
    const [corbotao,setcor] = useState(true)
    /*const gerarToken = async ()=>{
      
      const auth = Buffer.from(clientid + ":" + acesstoken).toString("base64");
const res = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token',{
    body: "grant_type=client_credentials",
    headers: {
        Authorization:`Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
})
//uma pagina para gerenciar o token 
const status = res.status
if(status === 200){
  setcor(true)
}
const response = await res.json()
console.log(response)
setToken(response.access_token)
    }*/

    

    const salvarToken = async () =>{
    const guardartoken = {
      clientid:clientid,
      secret:acesstoken
    }

    console.log(guardartoken)
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'salvartoken/' + props.user,{
            body:JSON.stringify(guardartoken),
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            }
        })
        const status = res.status
        const response = await res.json()
     if(status === 200){
setcor(false)
     }
       
    }
    return(
       <>

<Addtoken setclientid={setclientid} setacesstoken={setacesstoken}/>
       
      
{corbotao ? 
<div><button className='bg-[yellow]'onClick={salvarToken}>Salvar token</button></div> 
  : 
<div><button className='bg-[red]'onClick={salvarToken}>Salvar token</button></div> 
}

    
       </>
    )
}