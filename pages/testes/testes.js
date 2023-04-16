import { useState } from "react"
import React from "react"
import EditorBuild from "./novoeditor"
import DropFile from "../../components/elementos/dropfile/dropfile"
export default function Teste() {
    const [imagem, setImagem] = useState()
    const [tags, setTags] = useState([])
    const criarInstancia = async () => {
        const res = await fetch(`https://drive.deta.sh/v1/e0tgxf72/ecommerce/files?name=fotos/fotoagora.jpg`, {
            method: 'POST',
            headers: {
                'X-Api-Key': 'e0tgxf72_3FfAMeZ3jnG1GWjDhbUCkkt4vjpNmCko',
                'Content-Type': 'application/octet-stream'
            },
            body: imagem
        })
        const response = await res.json()
        console.log(response)
        console.log(imagem)
    }

    const criarTag = (e) => {
        const tagEid = {
            tag: 'h1',
            id: '123'
        }
        setTags(prevState => {
            return [...prevState, tagEid]
        })
    }
    const testarDeta = async () => {
        const usuario = [
            {
                "key": "key-1",
                "name": "teste",
                "lastname": "testando",
                "username": "testando",
                "email": 'testee@gmail.com',
                "senha": "123456789",

            },

        ]
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'cadastrarUsuario/cadastraDeta/' + 'fernandorrn', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        const response = await res.json()
        console.log(response)
    }
    return (
        <div className="flex flex-col min-h-screen border-4 border-slate-900 ">
            <div>
                <DropFile />
                <h1>testando</h1>
                <button onClick={criarInstancia}>clica aqui</button><br />
                <input type={'file'} placeholder={'primeiro upload'} onChange={e => setImagem(e.target.files[0])} /><br />
            </div>

            <div className="bg-[#00FFFF]">
                <button onClick={testarDeta}>clica ae fdp</button>

            </div>
            <div>
                <EditorBuild/>
            </div>
        </div>



    )
}

