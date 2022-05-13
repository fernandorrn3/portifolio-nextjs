import Link from "next/link"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"




export default function Home() {
 
  const { data: session, status } = useSession()
 



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











