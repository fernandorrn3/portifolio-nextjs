import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"

export default function Login() {
    return (
        <div className="grid content-center justify-items-center formulario bg-[orange] h-full ">
            <div className=" bg-[pink] px-8 py-8">

                <form method="POST">

                    <label for="fname">Nome</label><br />
                    <input id="name" type="text" autocomplete="name" required /><br />

                    <label for="fname">Email</label><br />
                    <input id="email" type="email" autocomplete="email" required /><br />


                    <label for="fname">Senha</label><br />
                    <input id="senha" type="password" autocomplete="senha" required /><br />


                    <button type="submit">Register</button>
                </form>

            </div>
        </div>


    )
}




Login.getLayout = function getLayout(Login) {
    return (
        <Layout>
            <Header />
            {Login}
            <Fotter />
        </Layout>
    )
}