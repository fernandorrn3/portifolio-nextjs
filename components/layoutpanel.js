import Sidebar from "./sidebar";
import Fotter from "./footer";
import Head from "next/head";

export default function Layoutpanel ({children}){

   return (
<>
<Head>
    <title>portifolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

</Head>

<div className="flex flex-row"> 


<Sidebar />

<main className="h-screen w-screen">{children}</main>
</div>

<Fotter/>

</>
   ) 

}