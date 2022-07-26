import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'

import {useState,useEffect } from "react";


function Addproduto() {
  const { data: session, status } = useSession()
  const [error,setError] = useState()
  const router = useRouter()
  const { user } = router.query
  const estado = useSelector((state) => state.menuReducer)
  
  

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

   console.log(user)

   console.log(session)



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
      
      <h1>dashboard page</h1>
     
      
    
     </div>

     :<div className='bg-[blue] h-full ml-[0] transition-all duration-700'>
<Botaomenu />
      
      <h1>dashboard page</h1>
    
      
      
     </div>
      }
    
    
    </div>
   

    
   
    
  )
}


 



Paineladm.getLayout = function getLayout(page){
 
  return(
    <Layoutpanel>
      
    {page}
  </Layoutpanel>
  )
 
}

export default  Addproduto


