import { useEffect, useState } from "react"
import { useRef } from "react";
import { useRouter } from 'next/router'
import { centralizar } from "../../../lib/editor";
import { criarTag } from "../../../lib/editor";
import { criarContainer } from "../../../lib/editor";
import { criarCaixas } from "../../../lib/editor";
import { useDispatch } from "react-redux";
import { addEditor } from "../../../reducer/reducerEditText";
import { addCaracter } from "../../../reducer/reducerProdCarac";
export default function EditorTexto({tipo}) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [tag, setTag] = useState()
    const [caixa, setCaixa] = useState()
    const [elemento, setElemento] = useState()
    const [inicial, setInicial] = useState()
    const [selecionado,setSelecionado] = useState()
    const [linhaEcoluna, setLinhaEcoluna] = useState('')
    const [objetos, setObjetos] = useState([])
    const divRef = useRef()
    const testandoContainer = useRef()
 

    



    useEffect(() => {

        if (tag) {
            if (caixa == ' ') {
                alert('caixa vazia cria uma caixa')
                setTag('')
                return null
            }
            
            if(caixa.id != 'caixaelemento'){
                alert('crie uma caixa primeiro')
                setTag('')
                return null
            }
            else {
                const container = divRef.current
                criarTag(tag, caixa, clickElement,teclaPress)
                setTag('')
            }
           
        }

    }, [tag])


    useEffect(() => {
        if (linhaEcoluna) {
            caixa.className += linhaEcoluna
            setLinhaEcoluna('')
        }
    }, [linhaEcoluna])




    const selecionarTag = (e) => {
        setTag(e.target.name)
    }


    const clickElement = (e) => {
        
        setElemento(e.target)
    }


    const alinharElemento = (e) => {

        if (!elemento) {
            console.log('selecione o elemento a ser alinhado')

        } else {

            centralizar(elemento, e.target.name)
            setElemento(null)


        }

    }


    const criarContainers = (e) => {
        const container = divRef.current

        criarContainer(container, selecionarContainer,passaMouse,tiraMouse)
        const ultimo = divRef.current.lastChild

        setObjetos(prevState => {
            return [...prevState, ultimo]
        })


    }

    const selecionarContainer = (e) => {

        switch (e.target.id) {

            case 'containerPai':
                setInicial(e.target.className)
                setCaixa(e.target)
                break;
            case 'caixaelemento':
                setInicial(e.target.className)
                setCaixa(e.target)
                break;
        }
    }


    const criarLinha = () => {
if(caixa.id == 'caixaelemento'){
    caixa.firstChild.classList.add('w-[100%]')
    caixa.lastChild.classList.add('w-[100%]')
}
        caixa.classList.remove('flex-row')
        caixa.classList.remove('flex-col')
        caixa.classList.remove('flex')
        setLinhaEcoluna(' flex flex-row')
    }

    const criarColuna = () => {
        caixa.classList.remove('flex-row')
        caixa.classList.remove('flex-col')
        caixa.classList.remove('flex')
        setLinhaEcoluna(' flex flex-col')
    }


    const criarCaixaElemento = (e) => {
        if (!caixa) {
            alert('crie o container primeiro')
            return null
        }
        if (caixa.id !== 'containerPai') {
            alert('selecione um container')
            return null
        } else {
            criarCaixas(caixa, selecionarContainer,passaMouse,tiraMouse)
        }
    }


    const teclaPress = (e) =>{
console.log(e.target)
    }

    const passaMouse = (e)=>{
        
        e.target.className += ' outline outline-offset-2 outline-pink-500 '
    }

    const tiraMouse = (e) =>{
e.target.classList.remove("outline","outline-offset-2" ,"outline-pink-500")
    }

const salvar = () => {
       
const conteudo = divRef.current.innerHTML
testandoContainer.current.innerHTML = divRef.current.innerHTML
if(tipo == 'detalhes'){
dispatch(addEditor(conteudo))
}
if(tipo == 'caracteristica'){
    dispatch(addCaracter(conteudo))
}

}

//mandar para o redux e depois recuperar quando for enviar para a base de dados

    return (
        <div className="flex h-full flex-col w-[100%] px-8 py-8">
            <div>
                <div><h1>Elementos criados</h1></div>

            </div>
            <div><button onClick={selecionarTag} className='bg-[blue]' name="h1">h1</button></div>

            <div><button onClick={selecionarTag} name="p" className='bg-[red]'>p</button></div>

            <div><button onClick={alinharElemento} name="centralizar" className='bg-[red]'>centralizar</button></div>

            <div><button onClick={criarContainers} name="div" className='bg-[red]'>Criar-container</button></div>

            <div><button onClick={criarLinha} name="div" className='bg-[red]'>Criar Linha</button></div>

            <div><button onClick={criarColuna} name="div" className='bg-[red]'>Criar coluna</button></div>

            <div><button onClick={criarCaixaElemento} name="div" className='bg-[red]'>Criar caixa</button></div>

            <div><button onClick={salvar} name="div" className='bg-[red]'>Salvar</button></div>

            <div className="flex flex-col bg-[yellow] h-full w-full px-2 py-2" id='teste' contentEditable={'true'} onClick={(e) => {

               if (divRef.current.firstChild == null) {
                    setCaixa(' ')
                    console.log('null')
                } else {
                    console.log('nao null')
                }


            }} ref={divRef} >
            </div>
<div ref={testandoContainer} className='bg-[green]'>
<h1>pré visiualizaçao conteudo</h1>
</div>
        </div>
    )
}

//criar linha


/*
<div class='flex flex-row'>  
<div><div><p></div> </div>      
<div><div>p</div></div>
*/ 