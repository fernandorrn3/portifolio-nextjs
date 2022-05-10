import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'
import Layoutpanel from "../../../components/layoutpanel"
import Botaomenu from '../../../components/elementos/btnmenu'
import {useState} from 'react'

function Editpost({error}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { user } = router.query
  const [valor,setvalor] = useState(false)
  
  
  
  
    if (status === "unauthenticated") {
      return(
        <h1>acesso negado, usuario precisa autenticar</h1>
      )
     }
  
  
     if(!session){
       return null;
     }
  
  
  if(session.username != user){
    return (
      <h1>Acesso negado</h1>
    )
  }
  

  
    if (error){
      return(
        <><h1>{error}</h1></>
      )
    } 
  
    return(
      
     <div className="h-full">
       
       {valor 
       ?<div className='bg-[blue] h-full ml-[220px] transition-all duration-700'> 
  
  
          <Botaomenu setvalor={setvalor} valor={valor}/>
        
        <h1>database page</h1>
       
        
      
       </div>
  
       :<div className='bg-[blue] h-full ml-[0] transition-all duration-700'>
  <Botaomenu setvalor={setvalor} valor={valor}/>
        
        <h1>database page</h1>
      
        
        
       </div>
        }
      
      
  
      </div>
      
      
 
  
    )
}



/*export async function getStaticPaths() {

    const { PrismaClient, Prisma } = require('@prisma/client')


    const prisma = new PrismaClient({
        errorFormat: 'pretty'
    })



    const finduser = await prisma.user.findMany({})

    const paths = finduser.map((usuario) => ({
        params: { user: usuario.username }
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


Editpost.getLayout = function(page){
  return(
    <Layoutpanel >
    {page}
  </Layoutpanel>
  )

}

export default Editpost



