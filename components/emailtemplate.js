export default function Emailtemplate(usuario,link){
   
  
    const conteudo = '<h1 style="background-color:red;">alo '+usuario+'</h1><a href=' +process.env.NEXT_PUBLIC_ROUTER_DEV + 'sendmail/'+link+'>clique aqui</a>'

    return conteudo
}