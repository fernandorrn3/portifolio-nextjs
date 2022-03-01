import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
  
  </SessionProvider>
  )
}