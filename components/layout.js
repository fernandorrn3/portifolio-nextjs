import Head from "next/head"
import Header from "./header"
import Fotter from "./footer"
import Navbar from "./navbar"

export default function Layout ({children}){
    
   
    return(
       
        <div className="flex flex-col">
    <Head>
        <title>Portifolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      
        <Navbar/>
        
        <main className="flex flex-col">{children}</main>
        <Fotter/>
        </div>
       
    )
}