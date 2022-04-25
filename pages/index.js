
import { useSession } from "next-auth/react"
import Layout from "../components/layout"





export default function Home() {
 
  const { data: session, status } = useSession()
 console.log(session)
  return (
    <Layout> 
    <div className='bg-[blue] h-full'>
     
      
     <h1>home page</h1>
    
    </div>
    </Layout>
  )
}











