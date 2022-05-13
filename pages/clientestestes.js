

export default function Cliente(){
const buscaClientes = async () =>{
   const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste',{
    headers: {
        'Content-Type': 'application/json'
      },
method:'POST'
   })
   const response = await res.json()
   console.log(response)
}
    return(
<button onClick={buscaClientes}>clica ae</button>
    )
    
}