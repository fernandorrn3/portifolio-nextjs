import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import store from '../store';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
   
<Provider store={store}>

  <SessionProvider session={session}> 
  {getLayout (
    
 
<Component {...pageProps} />

  )}

</SessionProvider>
</Provider> 
  )
}