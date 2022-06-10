import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'

import { useSelector } from 'react-redux'
import Gerar from "../../../lib/gerartoken"
import {useState,useEffect } from "react";
 function Token(){
    const { data: session, status } = useSession()
    const [error,setError] = useState()
    const router = useRouter()
    const { user } = router.query
    const estado = useSelector((state) => state.menu)
  
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
    
    
      
    
      if (status === "unauthenticated") {
        alert('acesso negado')
    router.push('/')
       }
    
    
       if(!session){
         return null;
       }
    
    
    
    if(session.username != user){
      alert('acesso negado')
    router.push('/')
    }  
    
    
    
    if(error){
      router.push('/')
    }
    
      
      
    return(
        <div className="h-full">

        {estado.estado 
        ?<div className='h-full ml-[220px] transition-all duration-700'> 
   
   
           <Botaomenu />
         
         <h1>manager token page</h1>
         
        <Gerar user={user}/>
        
       
        </div>
   
        :<div className='h-full ml-[0] transition-all duration-700'>
   <Botaomenu />
         
         <h1>manager token page</h1>
        
         <Gerar user={user}/>
         
         
        </div>
         }
       
       </div>
       
     
    )
}


Token.getLayout = function getLayout(page){
 
    return(
      <Layoutpanel>
        
      {page}
    </Layoutpanel>
    )
   
  }

  export default Token