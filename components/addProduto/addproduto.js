import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Formaddproduto(){
const router = useRouter()
const {user} = router.query
    const { register, handleSubmit, formState: { errors } } = useForm();

  if(!user){
    return null
  }
    const onSubmit = async (data) => {
     const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/' + user,{
        method:'POST',
        body:JSON.stringify({
            titulo:data.titulo,
            category_name:data.category_name,
            quantidade:data.quantidade,
            preço:data.preço,
            descrição:data.descrição
            

        })
     })
     const response = await res.json()
     console.log(data.titulo)
    }

    return(
        <div> 
        
        <form onSubmit={handleSubmit(onSubmit)}>
      <div><input type="text" placeholder="titulo" {...register("titulo", {required: true})} /></div>
      <div> <input type="text" placeholder="category_name" {...register("category_name", {required: true})} /></div>
      <div><input type="number" placeholder="quantidade " {...register("quantidade ", {required: true})} /></div>
      <div><input type="text" placeholder="preço" {...register("preço", {required: true})} /></div>
      <div><input type="text" placeholder="picture_url" {...register("picture_url", {})} /></div>
      <div><textarea {...register("descriçao ", {required: true})} /></div>
      <input type="submit" />
    </form>
    
        
    </div>
    )
}