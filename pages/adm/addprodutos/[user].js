import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'
import {useState,useEffect } from "react";
import Formaddproduto from "../../../components/addProduto/addproduto"

function Addproduto() {
  const { data: session, status } = useSession()
  const [error,setError] = useState()
  const [styleMenu,setStyle] = useState('h-full ml-[220px] transition-all duration-700')
  const router = useRouter()
  const { user } = router.query
  const estado = useSelector((state) => state.menuReducer)

  
  useEffect(()=>{
    if(estado.estado){
      setStyle('h-full ml-[220px] transition-all duration-700')
        }else{
          setStyle('bg-[blue] h-full ml-[0] transition-all duration-700')
        }
console.log(styleMenu)      
  },[estado])


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





if(session.username != user){
alert('acesso negado  nomes inconscistente ')
router.push('/')
}  



if(error){
  router.push('/')
}

 


  return(
   //
 <div className="h-full">

     
      
     <div className={styleMenu}> 


        <Botaomenu />
      
      <Formaddproduto/>
     
      
  </div>
    
    </div>
   

    
   
    
  )
}


 



Addproduto.getLayout = function getLayout(page){
 
  return(
    <Layoutpanel>
      
    {page}
  </Layoutpanel>
  )
 
}

export default  Addproduto


