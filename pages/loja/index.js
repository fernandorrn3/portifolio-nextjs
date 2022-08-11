import Produto from "../../components/produto"
import Layout from "../../components/layout"
import Carrinho from "../../components/elementos/carrinho/carrinho"
import { useEffect } from "react"
export default function Homeloja(){
    
    //salvar itens carrinho redux
    //criar carrinho na storage
    //criar um reducer para gerenciar os dados no redux
    useEffect(async ()=>{
        const res = await fetch('https://viacep.com.br/ws/20910210/json/')
        const response = await res.json()
        
    })
    return(
        <div className="flex flex-col grid grid-cols-12">
        <Produto/>
      
        </div>

    )
}

Homeloja.getLayout = function(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}