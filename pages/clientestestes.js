

export default function Cliente(){
const buscaClientes = async () =>{
   const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'teste')
   const response = await res.json()
   console.log(response)
}
    return(
<button onClick={buscaClientes}>clica ae</button>
    )
    
}