import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { inserirProdutos } from '../../reducer/reducerProdutos';
import { useDispatch } from 'react-redux';
export default function Formaddproduto(){
    const dispatch = useDispatch()
    const [titulo,settitulo] = useState()
    const [categoria,setcategoria] = useState()
    const [quantidade,setquantidade] = useState()
    const [preco,setpreco] = useState()
    const [descricao,setdescricao] = useState()
const router = useRouter()
const {user} = router.query
    

  if(!user){
    return null
  }
    const salvarProdutos = async (e) => {
        e.preventDefault()
        const data = {
            titulo:titulo,
            categoria:categoria,
            quantidade:quantidade,
            preco:preco,
            descricao:descricao,
            user:user
        }
       dispatch(inserirProdutos(data))
    
    
    }

    return(
        <div> 
        
    <form onSubmit={salvarProdutos}>
<label>Titulo</label><br/>
<input type='text' name='titulo' onChange={e => settitulo(e.target.value)} placeholder='titulo'/><br/>


<label>Categoria</label><br/>
<input type={'text'} name='categoria' onChange={e => setcategoria(e.target.value)} placeholder='Categoria'/><br/>

<label>quantidade</label><br/>
<input type={'text'} name='quantidade' onChange={e => setquantidade(e.target.value)} placeholder='quantidade'/><br/>

<label>preco</label><br/>
<input type={'text'} name='preco' onChange={e => setpreco(e.target.value)} placeholder='preco'/><br/>

<label>descrição</label><br/>
<textarea name='descrição' onChange={e => setdescricao(e.target.value)}></textarea><br/>

<input type="submit" value="Enviar" />

    </form>
    
        
    </div>
    )
}