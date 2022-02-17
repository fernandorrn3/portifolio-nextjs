import Layout from "../components/layout"
import Header from "../components/header"
import Fotter from "../components/footer"
import { useRouter } from 'next/router';
import { useState } from "react"
export default function Cadastrar() {

    const [nome,setNome] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [mensagem,setMensagem] = useState({})
    const router = useRouter();
    

const registerUser = async (e) =>{
    e.preventDefault()

    const data = {
        name:nome,
        email:email,
        senha:senha
    }
    const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'usuario', 
    {
        body:JSON.stringify(data),

        headers: {
            'Content-Type': 'application/json'
          },

          method: 'POST'
    },
   
    
    )


    const result = await res.json()
    const status = await res.status
   if(status === 200){
router.push('/')
   }
   setMensagem(result)

   
    
}



    return (
        <div className="grid grid-cols-12 grid-rows-6 h-full ">
            <div className="flex justify-center items-center col-start-1 col-end-13 row-start-1 row-end-7 bg-[pink] ">
                <div>
{Object.keys(mensagem).length > 0 &&
<p>{mensagem.enviou}</p>
}
                
                    <form onSubmit={registerUser} action={`${process.env.DB_HOST + '/usuario'}`} method="POST">
                        <label>Nome</label><br/>
                        <input type="text" name="name" id="nome" onChange={(e) => setNome(e.target.value)}/><br/>

                        <label>Email</label><br/>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/><br/>

                        <label>Senha</label><br/>
                        <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)}/><br/>


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