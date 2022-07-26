import Layout from "../components/layout"

import { useRouter } from 'next/router';
import { useState } from "react"
import { useSession } from "next-auth/react"


export default function Cadastrar() {
    const { data: session, status } = useSession()
    const [nome,setNome] = useState()
    const [lastname,setLast] = useState()
    const [userName,setUserName] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [mensagem,setMensagem] = useState({})
    const router = useRouter();
    
    
    if (status === "authenticated") {
        router.push('/')
      }

const registerUser = async (e) =>{
    e.preventDefault()

console.log(process.env.NEXT_PUBLIC_DB_HOST )

    const data = {
        name:nome,
        lastname:lastname,
        email:email,
        senha:senha,
        username:userName
    }
   
    const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'cadastraUser', 
    {
        body:JSON.stringify(data),

        headers: {
            'Content-Type': 'application/json'
          },

          method: 'POST'
    },
   
    
    )


    
    
    const status =  res.status
  console.log(status)

  const response = await res.json()
  console.log(response)
    
   if(status === 200){
       
router.push('/')
   }else{
    setMensagem(response.mensagem)
    
   }

   

   
   
}



    return (
        <Layout> 
        <div className="grid grid-cols-12 grid-rows-6 h-full ">
            <div className="flex justify-center items-center col-start-1 col-end-13 row-start-1 row-end-7 bg-[pink] ">
                <div>
{Object.keys(mensagem).length > 0 &&
<p>{mensagem}</p>
}
                
                    <form onSubmit={registerUser} action={`${process.env.DB_HOST + '/usuario'}`} method="POST">
                        <label>Nome</label><br/>
                        <input type="text" name="name" id="nome" onChange={(e) => setNome(e.target.value)}/><br/>

                        <label>Sobre-nome</label><br/>
                        <input type="text" name="lastname" id="lastname" onChange={(e) => setLast(e.target.value)}/><br/>

                        <label>userName</label><br/>
                        <input type="text" name="name" id="nome" onChange={(e) => setUserName(e.target.value)}/><br/>

                        <label>Email</label><br/>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/><br/>

                        <label>Senha</label><br/>
                        <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)}/><br/>


                        <input type="submit" value="Enviar" />
                    </form>



                    
                </div>
            </div>

        </div>
        </Layout>
    )
}

