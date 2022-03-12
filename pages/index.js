import { signOut, useSession } from "next-auth/react";

import Header from '../components/header'

import Fotter from '../components/footer'






export default function Home() {
  
  const { data: session } = useSession();
  
  console.log(session)
  return (
    <div className='bg-[blue] h-full'>
     
      
     <h1>home page</h1>
    
    </div>
  )
}

Home.getLayout = function (Home) {
  return (
      <Layout>
          <Header />
          {Home}
          <Fotter />
      </Layout>
  )
}

