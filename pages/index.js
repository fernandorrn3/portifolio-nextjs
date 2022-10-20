import Link from "next/link"
import Script from 'next/script'
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import Produto from "../components/produto"



export default function Home() {
 
  const { data: session, status } = useSession()

//apos criar  a conta é enviado junto a conta do usuario 1 link aleatorio para a tabela usuario
//envia 1 email para o usuario com esse link

//faz uma busca na tabela de usuarios com esse link enviado

console.log(status)



return(
  <div className="flex flex-col grid grid-cols-12">
       <>
       <Script src="https://www.mercadopago.com/v2/security.js" view="home"></Script>

    </>
  <Produto/>

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











