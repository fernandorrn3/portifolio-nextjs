import { useSession  } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import { useSelector } from 'react-redux'

import {useState,useEffect } from "react";


function Paineladm() {
  const { data: session, status } = useSession()
  const [error,setError] = useState()
  const router = useRouter()
  const { user } = router.query
  const estado = useSelector((state) => state.menu)
  
  

  useEffect(async ()=>{
    if(!user){
      return
    }
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + '/dashboard/'  + user)
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


 
// This function gets called at build time
/*export async function getStaticPaths() {
 
const { PrismaClient,Prisma } = require('@prisma/client')


const prisma = new PrismaClient({
  errorFormat: 'pretty' 
})



const finduser = await prisma.user.findMany({}) 

const paths = finduser.map((usuario)=>({
  params:{user: usuario.username}
}))




  return { paths, fallback: 'blocking' }
}










export async function getStaticProps({params}) {
 


  
  

const { PrismaClient,Prisma } = require('@prisma/client')
const prisma = new PrismaClient({
  errorFormat: 'pretty' 
})


  const finduser = await prisma.user.findUnique({
    where:{
      username:params.user
    },
    select:{
      username:true,
      isAdm:true
    }
  })


  try {

    if(finduser === null) throw 'usuario nao encontrado acesso negado'
    
    if(!finduser.isAdm) throw 'acesso negado, usuario nao tem permissao para acessar essa rota'
    if(finduser.isAdm) return {props:{params}}
    
    
  } catch (error) {
    return {props: {error}}
  }



  return {props: {params}}
 
}*/



Paineladm.getLayout = function getLayout(page){
 
  return(
    <Layoutpanel>
      
    {page}
  </Layoutpanel>
  )
 
}

export default  Paineladm


