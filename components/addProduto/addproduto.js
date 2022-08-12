import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { inserirProdutos } from '../../reducer/reducerProdutos';
import { useDispatch } from 'react-redux';
export default function Formaddproduto() {
    const dispatch = useDispatch()
    const [titulo, settitulo] = useState()
    const [categoria, setcategoria] = useState()
    const [quantidade, setquantidade] = useState()
    const [preco, setpreco] = useState()
    const [descricao, setdescricao] = useState()
    const [addCategoria, setAddCategoria] = useState(false)
    const [styleCat, setStyleCat] = useState('flex flex-col bg-[blue] invisible')
    const [styleButtonCat, setStyleButtonCat] = useState('flex flex-col')

    const router = useRouter()
    const { user } = router.query


    if (!user) {
        return null
    }

    //adiciona produto 
    //adicionar produto +  detahles
    //adicionar produto + caracteristica
    //adicionar produto + categoria

    //adicionar produto + detalhes + categoria + caracteristica

    //adicinar 1 produto, criar uma categoria, conectar 1 produto a uma categoria

    const salvarProdutos = async (e) => {
        e.preventDefault()
        console.log('mandou?')
        switch (e.target.name) {
            case 'produtos':
                console.log('produto')
                break;
            case 'produtos/detalhe':
                console.log('produto/detalhe')
                break;
            case 'produtos/caracteristicas':
                console.log('produto/caracteristica')
                break;

            case 'produtos/categoria':
                const data = {
                    adicionado: e.target.name,
                    titulo: titulo,
                    categoria: categoria,
                    quantidade: quantidade,
                    preco: preco,
                    descricao: descricao,
                    user: user
                }
                dispatch(inserirProdutos(data))
                break;
        }
        /*const data = {
            adicionando:e.target.name,
            titulo:titulo,           
            quantidade:quantidade,
            preco:preco,
            descricao:descricao,
            user:user
        }
       dispatch(inserirProdutos(data))*/


    }

    const adicionarCategoria = () => {
        addCategoria ? setAddCategoria(false) : setAddCategoria(true)

        //se adicionar categoria for true,button form produtos/hidden
    }

    useEffect(() => {
        addCategoria ? setStyleButtonCat('hidden') : setStyleButtonCat('flex flex-col')
        addCategoria ? setStyleCat('flex flex-col bg-[blue] visible') : setStyleCat('flex flex-col bg-[blue] invisible')
    }, [addCategoria])

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col bg-[green]'>
                <div><h1>adicionar somente o produto</h1></div>
                <div>
                    <form onSubmit={salvarProdutos} name='produtos' className='flex flex-col'>
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
                        <div className={styleButtonCat}>
                        <div><input type="submit" value="Enviar Produtos" /></div>
                        </div>

                    </form>

                </div>
            </div>




            <div className={styleCat}>
                <h1>adicionar produtos/categoria</h1>
                <div>
                    <form onSubmit={salvarProdutos} name='produtos/categoria'>
                        <label>adicionar categoria</label><br />
                        <input type={'text'} onChange={e => setcategoria(e.target.value)} placeholder='adicionar-Categoria' /><br />
                        <input type={'submit'} value='enviar-produtos' /><br />
                    </form>
                </div>
            </div>

            <div className='flex flex-col bg-[yellow]'>
                <h1>adcionar detalhe-produtos</h1>
            </div>
            <div className='flex flex-col bg-[#00ff00]'>
                <h1>adcionar caracteristicas-produtos</h1>
            </div>
            <div> <button onClick={adicionarCategoria}>add Categoria</button></div>
        </div>
    )
}