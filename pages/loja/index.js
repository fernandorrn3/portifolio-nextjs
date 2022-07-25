import Produto from "../../components/produto"
import Layout from "../../components/layout"
import { useEffect } from "react"
export default function Homeloja(){
    
    //salvar itens carrinho redux
    //criar carrinho na storage
    //criar um reducer para gerenciar os dados no redux
    useEffect(async ()=>{
        const res = await fetch('https://viacep.com.br/ws/20910210/json/')
        const response = await res.json()
        console.log(response)
    })
    return(
        <>
        <h1>Home loja</h1>
        <Produto/>
        </>

    )
}

Homeloja.getLayout = function(page){
    return(
        <Layout>
            {page}
        </Layout>
    )
}