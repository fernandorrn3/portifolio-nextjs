import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'
import {infosacc, Addonsinfo,Infoaddonsintal} from "../../../lib/infosccheroku"
import {useState,useEffect } from "react";

function Database() {
  const { data: session, status } = useSession()
  const [error,setError] = useState()
  const router = useRouter()
  const { user } = router.query
  const estado = useSelector((state) => state.menuReducer)
  
  //apos o cliente se inscrever no site ele ira ter a opçao de fazer o upgrade da base de dados
  //apos o pagamento ser aprovado e cair em conta o plano do cliente ira fazer upgrade
  //o cancelamento da fatura so podera ser feito apos quitar os saldos pendentes

  useEffect(async ()=>{
 
    if(!user){
      return
    }
   
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + '/checkuser/'  + user)
const result = await res.json()
const status = res.status
if(status === 401){
  setError(result.mensagem)
}

console.log(await Infoaddonsintal())
//vou criar o app, vou criar a base de dados
//posso criar ate 100 apps
//cada app vai possuir 1 banco de dados
//cada banco de dados vai possuir 1 plano


  },[router])

if(!user){
  return null
}
  if(!session){
    return null;
  }

  if (status === "unauthenticated") {
    alert('acesso negado nao esta autenticado')
router.push('/')
   }

  



if(session.username != user){
alert('acesso negado  nomes inconscistente ')
router.push('/')
}  



if(error){
  router.push('/')
}

  



  return(
   
 <div className="h-full">

     
     {estado.estado 
     ?<div className='bg-[blue] h-full ml-[220px] transition-all duration-700'> 


        <Botaomenu />
      
      <h1>Data-base page</h1>
     
      
    
     </div>

     :<div className='bg-[blue] h-full ml-[0] transition-all duration-700'>
<Botaomenu />
      
      <h1>Data-base page</h1>
    
      
      
     </div>
      }
    
    
    </div>
   

    
   
    
  )
}





Database.getLayout = function(page){
  return(
    <Layoutpanel >
    {page}
  </Layoutpanel>
  )

}

export default Database



