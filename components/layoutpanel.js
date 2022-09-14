import Sidebar from "./sidebar";
import Fotter from "./footer";
import Head from "next/head";


export default function Layoutpanel ({children}){

   return (
<div className="flex flex-col">
<Head>
    <title>portifolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

</Head>

<div className="flex flex-row min-h-screen"> 


<Sidebar />

{children}
</div>

<Fotter/>

</div>
   ) 

}