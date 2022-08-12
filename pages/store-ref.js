import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
import Image from 'next/image'
import { useState } from "react";
import { useEffect } from "react";

export default function CriarRef(){
    const [image,setimage] = useState()
    const [value,setValor] = useState()
    const [prop,setProp] = useState()
    const [catnome,setcatnome] = useState()
    const [catid,setcatid] = useState()
    const [objeto,setobjeto] = useState([])

const firebaseConfig = {
    apiKey: "AIzaSyBAJUfxDWOOwWgqTrd0W3HW3I20HChj0cA",
    authDomain: "ecommerce-c7206.firebaseapp.com",
    projectId: "ecommerce-c7206",
    storageBucket: "ecommerce-c7206.appspot.com",
    messagingSenderId: "685508529738",
    appId: "1:685508529738:web:2601eb4162e9acc8d920b3",
    measurementId: "G-ZVKSWMMW94"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();
  
  //agora eu preciso editar a tabela de produtos na base de dados

  const enviar = () =>{
   
    if(!image) {
return null
    }
    //cria uma referencia no container do storage
    const imagesRef = ref(storage, 'chulee');
   
    //passa essa referencia e o arquivo a ser carregado para o container
   uploadBytes(imagesRef,image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
}

const downloadfile = () =>{
    const pathReference = ref(storage, 'chulee');
    getDownloadURL(ref(storage, pathReference)).then((url)=>{
        console.log(url)
    })

}

useEffect(()=>{


},[objeto])
const mandar = () =>{
const caracteristicas = {
    propriedade:prop,
    valor:value
}



setobjeto(prevArray  =>[...prevArray ,caracteristicas])

}

//
const enviarProps = async ()=>{
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/fernandorrn',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(objeto)
})
}


const enviarCategoria = async(e)=>{

    const enviarAcategoria = {
       editando:e.target.name,
        catenome:catnome,
        cateid:catid
    }


    const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/fernandorrn',{
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(enviarAcategoria)
    })

    const response = await res.json()
    console.log(response)
 
}

    return(
        <div>
            <div className="flex flex-col bg-[green]"> 
            <h1>Criar refs</h1>
     
      <div><input type={'file'} placeholder='up img' onChange={e=>setimage(e.target.files[0])}/></div>
      <div> <button onClick={enviar}>enviar </button></div>
     <div><button onClick={downloadfile}>download file</button></div> 
     </div>

     <div className="flex flex-col bg-[blue]"> 
    <div><input type={'text'} placeholder={'add-propriedade'} onChange={e=>setProp(e.target.value)} /></div> 
     <div><input type={'text'} placeholder={'add-valor'} onChange={e=>setValor(e.target.value)}/></div> 
     <div><button onClick={mandar}>adicionar</button></div>
      <div><button onClick={enviarProps}>Enviar-props</button></div>
     </div>


<div className="flex flex-col bg-[yellow]">
    <h1>mandar Categoria produto</h1>
    <div><input type={'text'} onChange={e=> setcatnome(e.target.value)} placeholder='nome categoria'/></div>
    <div><input type={'number'} onChange={e=> setcatid(e.target.value)} placeholder='id-Categoria'/></div>

    <div><button onClick={enviarCategoria} name={'categoria'}>enviar Categoria</button></div>
</div>
   
      

     
      
      </div>
      
    )
}