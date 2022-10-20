
import '../styles/globals.css'
import '../pages/checkout/check.css'
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react';
import { wrapper } from '../store';
import { useSession } from 'next-auth/react';
const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (

    <>
      <SessionProvider session={session} refetchInterval={5 * 60}>

        {
          Component.auth ? 
          (<Auth>
              {getLayout(<Component {...pageProps} />)}
            </Auth>) 
            
            : 
            (getLayout(<Component {...pageProps} />))

        }

      </SessionProvider>
    </>
  )
}
function Auth({ children }) {

  const { data: session, status } = useSession()


  

  if (status === "unauthenticated") {
    return <div>login necessario</div>
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }
  
  if (session) {
    if (session.isAdm) {
      return children
    } else {
      return <div>vc n e adm champs</div>
    }
  }



}
export default wrapper.withRedux(MyApp)

