import Link from "next/link"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import Emailtemplate from "../components/emailtemplate"




export default function Home() {
 
  const { data: session, status } = useSession()
 console.log(session)

console.log(Emailtemplate('usuario','link'))

  return (
    <Layout> 
    <div className='bg-[blue] h-full'>
     
      
     <h1>home page</h1>
   
    
    </div>
    </Layout>
  )
}











