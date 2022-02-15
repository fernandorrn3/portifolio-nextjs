import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"

export default function Login() {
    return (
       
     <div><h1>login</h1></div>
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