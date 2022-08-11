import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
import Image from 'next/image'
import { useState } from "react";
import { useEffect } from "react";

export default function CriarRef(){
    const [image,setimage] = useState()
    const [value,setValor] = useState()
    const [prop,setProp] = useState()
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


const enviarProps = async ()=>{
const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'addproduto/fernandorrn',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(objeto)
})
}

    return(
        <div><h1>Criar refs</h1>
      <button onClick={enviar}>enviar </button><br/>
      <input type={'file'} placeholder='up img' onChange={e=>setimage(e.target.files[0])}/>
      <button onClick={downloadfile}>download file</button><br/>

      <input type={'text'} placeholder={'add-propriedade'} onChange={e=>setProp(e.target.value)} /><br/>
      <input type={'text'} placeholder={'add-valor'} onChange={e=>setValor(e.target.value)}/><br/>
      

      <button onClick={mandar}>enviar</button><br/>
      <button onClick={enviarProps}>Enviar-props</button>
      
      </div>
      
    )
}