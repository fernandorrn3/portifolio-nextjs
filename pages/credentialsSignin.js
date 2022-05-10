import { getCsrfToken } from "next-auth/react"
import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
export default function SignIn({ csrfToken }) {
  const { data: session, status,user } = useSession()
  const router = useRouter()
  console.log(router.query.error);

  

 
  return (
    <Layout>
    <div className="grid grid-cols-12 h-full bg-[orange] grid-rows-6 ">


 <div className='flex justify-center items-center bg-[blue] col-start-1 col-end-13 row-start-1 row-end-7 '> 
   <div className=' bg-[pink] pt-6 pb-6 pr-6 pl-6'>

   <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>Username</label><br/>
      <input name="username" type="text" /><br/>
      <label>Password</label><br/>
      
      <input name="password" type="password" /><br/>
      
      <button type="submit">Sign in</button>
    </form> 

    
   
     </div>
     
     
    </div>

   

    </div>
    </Layout>
  
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/