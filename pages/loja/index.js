import Produto from "../../components/produto"
import Layout from "../../components/layout"
export default function Homeloja(){
    
    //salvar itens carrinho redux
    //criar carrinho na storage
    //criar um reducer para gerenciar os dados no redux
    
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