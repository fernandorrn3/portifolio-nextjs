
import '../styles/globals.css'
import './teste.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { wrapper } from '../store';
const MyApp = ({ Component, pageProps: { session, ...pageProps } })=> {
  const getLayout = Component.getLayout || ((page) => page);

  return (

    <>
    
    
  
   


  <SessionProvider session={session}> 
  {getLayout (
    
 
<Component {...pageProps} />

  )}

</SessionProvider>

</>
  )
}

export default wrapper.withRedux(MyApp)