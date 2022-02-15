import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"
export default function Cadastrar() {

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-full ">
            <div className="flex justify-center items-center col-start-1 col-end-13 row-start-1 row-end-7 bg-[pink] ">
                <div>
                    <form action={`${process.env.DB_HOST + '/usuario'}`} method="POST">
                        <label for="name">Name</label>
                        <input id="name" type="text" name="name" required />
                        <button type="submit">Register</button>
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