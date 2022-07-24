import Link from "next/link"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"




export default function Home() {
 
  const { data: session, status } = useSession()
 
//apos criar  a conta é enviado junto a conta do usuario 1 link aleatorio para a tabela usuario
//envia 1 email para o usuario com esse link

//faz uma busca na tabela de usuarios com esse link enviado




  return (
    
    <div className='bg-[blue] h-full'>
     
      
     <h1>home page</h1>
   
    
    </div>
   
  )
}



Home.getLayout = function(page){
  return(
    <Layout>
      {page}
    </Layout>
  )
}











