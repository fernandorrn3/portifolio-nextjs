import { useState } from "react"
export default function Gerar(){
    const [token,setToken] = useState()
    const [corbotao,setcor] = useState(false)
    const gerarToken = async ()=>{
const res = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token',{
    body: "grant_type=client_credentials",
    headers: {
        Authorization: "Basic QVhSdHUzV0VZdEgzb2VqLTZiSDdBLWdFZ0djQi0yOHE4VkRXTDJ1N1Nhdy1xMUZjaHZuS296T0stQ0ZhLUJvQUxOZHZTV0VYTl9PSWZSdnI6RUduX2tFVVd2OFh6OVFWWFo0aWhrR2ZEcmhwQlVucVJ0TU1HUlNaY2RZdFNEckZRNER1WW1FTTR5VFBkZnJLbkt1eWJ0UlN1Q090ci1ubnM=",
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

setToken(response.access_token)
    }

    const salvarToken = async () =>{
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'salvartoken/' + 'salvartoken',{
            body:JSON.stringify(token),
            method:'POST'
        })
        const response = await res.json()
     
        console.log(response)
    }
    return(
       <>
       <div><button onClick={gerarToken}>Gerar Token</button></div>
{corbotao ? 
<div><button className='bg-[yellow]'onClick={salvarToken}>Salvar token</button></div> 
  : 
<div><button className='bg-[red]'onClick={salvarToken}>Salvar token</button></div> 
}

    
       </>
    )
}