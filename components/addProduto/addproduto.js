import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { inserirProdutos } from '../../reducer/reducerProdutos';
import { useDispatch } from 'react-redux';
import EditorTexto from '../elementos/editortexto/editorTexto';
import { useSelector } from 'react-redux';
export default function Formaddproduto() {
    const dispatch = useDispatch()
    const [titulo, settitulo] = useState()
    const [categoria, setcategoria] = useState()
    const [quantidade, setquantidade] = useState()
    const [preco, setpreco] = useState()
    const [descricao, setdescricao] = useState()
    const [ativado, setAtivado] = useState({ categoria: 'desativado', detalhes: 'desativado', caracteristicas: 'desativado', produtos: 'ativado' })
    const [addCategoria, setAddCategoria] = useState(false)
    const [addDetalhe, setAddDetalhe] = useState(false)
    const [addCaracte, setAddCaracte] = useState(false)
    const [styleCat, setStyleCat] = useState('invisible')
    const [styleDetail, setStyleDetail] = useState('hidden')
    const [styleCaracte, setStyleCaracte] = useState('invisible')
    const [styleButtonCat, setStyleButtonCat] = useState('flex flex-col')
    const pegarEditor = useSelector(state => state.reducerEditText)
    const router = useRouter()
    const { user } = router.query



    if (!user) {
        return null
    }

    //adiciona produto 
    //adicionar produto +  detahles
    //adicionar produto + caracteristica
    //adicionar produto + categoria
    //produto + detalhe + caracteristicas
    //produto + caracteristica + categoria
    //produto + detalhe + categoria
    //adicionar produto + detalhes + categoria + caracteristica
    //quando o camarada clicar no botao categoria + caracteristica
    //categoria esta ativada? entao manda categoria,
    //detalhe esta ativado? entao manda detalhe
    //caracteristica esta ativado? entao manda caracteristica
    const salvarProdutos = async (e) => {
        const dataProdutos = {}
       


        if (ativado.caracteristicas === 'ativado') {


        }
        if (ativado.categoria === 'ativado') {
            dataProdutos.categoria = categoria
            dataProdutos.ativaagora = {
                categoria: 'ativado'
            }
        }
        if (ativado.detalhes === 'ativado') {
            
           dataProdutos.ativaagora = {
            detalhes:'ativado'
           }
           dataProdutos.enviarEditor = pegarEditor
        }
        if (ativado.produtos === 'ativado') {
            dataProdutos.user = user
            dataProdutos.titulo = titulo
            dataProdutos.quantidade = quantidade
            dataProdutos.descricao = descricao
            dataProdutos.preco = preco
            dispatch(inserirProdutos(dataProdutos))
        }


    }


    const adicionarCategoria = () => {

        addCategoria ? setAddCategoria(false) : setAddCategoria(true)

    }

    const addDetalhes = () => {
        addDetalhe ? setAddDetalhe(false) : setAddDetalhe(true)
    }

    const addCaracteristicas = () => {
        addCaracte ? setAddCaracte(false) : setAddCaracte(true)
    }

    useEffect(() => {
        addDetalhe ? setStyleDetail('flex flex-col my-4 bg-[#00CD66] ') : setStyleDetail('hidden')
        addDetalhe ? setAtivado(prevState => {
            return { ...prevState, detalhes: 'ativado' }
        }) : setAtivado(prevState => {
            return { ...prevState, detalhes: 'desativado' }
        })
    }, [addDetalhe])

    useEffect(() => {
        addCaracte ? setStyleCaracte('flex flex-col my-4 bg-[#00ff00] visible') : setStyleCaracte('invisible')
        addCaracte ? setAtivado(prevState => {
            return { ...prevState, caracteristicas: 'ativado' }
        }) : setAtivado(prevState => {
            return { ...prevState, caracteristicas: 'desativado' }
        })

    }, [addCaracte])
    useEffect(() => {
        addCategoria ? setStyleButtonCat('hidden') : setStyleButtonCat('flex flex-col')
        addCategoria ? setStyleCat('flex flex-col bg-[blue] visible') : setStyleCat('flex flex-col bg-[blue] invisible')
        addCategoria ? setAtivado(prevState => {
            return { ...prevState, categoria: 'ativado' }
        }) : setAtivado(prevState => {
            return { ...prevState, categoria: 'desativado' }
        })

    }, [addCategoria])

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col bg-[green]'>
                <div><h1>adicionar somente o produto</h1></div>
                <div>
                    <div>
                        <label>Titulo</label><br />
                        <input type='text' name='titulo' onChange={e => settitulo(e.target.value)} placeholder='titulo' />
                    </div>
                    <div>
                        <label>quantidade</label><br />
                        <input type={'text'} name='quantidade' onChange={e => setquantidade(e.target.value)} placeholder='quantidade' />
                    </div>
                    <div>
                        <label>preco</label><br />
                        <input type={'text'} name='preco' onChange={e => setpreco(e.target.value)} placeholder='preco' />
                    </div>
                    <div>
                        <label>descrição</label><br />
                        <textarea name='descrição' onChange={e => setdescricao(e.target.value)}></textarea><br />
                    </div>




                </div>
            </div>

            <div className='flex flex-col'>

                <div className={styleCat}>
                    <h1>adicionar produtos/categoria</h1>
                    <div>

                        <label>adicionar categoria</label><br />
                        <input type={'text'} onChange={e => setcategoria(e.target.value)} placeholder='adicionar-Categoria' /><br />


                    </div>
                </div>

                <div className={styleDetail}>
                    <div><h1>adcionar detalhe-produtos</h1></div>
                    <EditorTexto/>
                    <div>



                    </div>

                </div>

                <div className={styleCaracte}>
                    <div><h1>adcionar caracteristicas-produtos</h1></div>
                </div>
            </div>

            <div className='flex flex-col'> 
            <div className='my-4'> <button className='bg-[#cc9900]' onClick={adicionarCategoria}>add Categoria</button></div>
            <div className='my-4'> <button className='bg-[#ff6699]' onClick={addDetalhes}>add detalhes</button></div>
            <div className='my-4'> <button className='bg-[#00FF7F]' onClick={addCaracteristicas}>add caracteristica</button></div>
            <div className='my-4'><button className='bg-[#483D8B]' onClick={salvarProdutos}>Enviar</button></div>
        </div>
        </div>
    )
}




