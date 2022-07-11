
import '../styles/globals.css'
import '../pages/checkout/check.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { wrapper } from '../store';
const MyApp = ({ Component, pageProps: { session, ...pageProps } })=> {
  const getLayout = Component.getLayout || ((page) => page);

  return (

    <>
    
    
  
   


  <SessionProvider session={session} refetchInterval={5 * 60}> 
  {getLayout (
    
 
<Component {...pageProps} />

  )}

</SessionProvider>

</>
  )
}

export default wrapper.withRedux(MyApp)