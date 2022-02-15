import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"
export default function Cadastrar() {

    return (
        <div className="grid grid-cols-12 grid-rows-6 h-full ">
            <div className="flex justify-center items-center col-start-1 col-end-13 row-start-1 row-end-7 bg-[pink] ">
                <div>
                    <form>
                        <label>
                            Nome:
                            <input type="text" name="name" />
                        </label>
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