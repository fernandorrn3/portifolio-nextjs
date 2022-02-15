import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"
export default function Cadastrar() {

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-full ">
            <div className="flex justify-center items-center col-start-1 col-end-13 row-start-1 row-end-7 bg-[pink] ">
                <div>
                    <form action={`${process.env.DB_HOST + '/usuario'}`} method="POST">
                        <label>Nome</label><br/>
                        <input type="text" name="name" id="nome"/><br/>

                        <label>Email</label><br/>
                        <input type="email" name="email" id="email"/><br/>

                        <label>Senha</label><br/>
                        <input type="password" name="senha" id="senha"/><br/>


                        <input type="submit" value="Enviar" />
                    </form>



                    
                </div>
            </div>

        </div>

    )
}

Cadastrar.getLayout = function (Cadastrar) {
    return (
        <Layout>
            <Header />
            {Cadastrar}
            <Fotter />
        </Layout>
    )
}