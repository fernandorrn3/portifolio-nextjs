



export default function Cliente(){
const buscaClientes = async () =>{
   const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste',{
    headers: {
        'Content-Type': 'application/json'
      },
method:'POST'
   })
   const status = res.status
   
   const response = await res.json()
   console.log(status)
}
    return(
<button onClick={buscaClientes}>clica ae</button>
    )
    
}