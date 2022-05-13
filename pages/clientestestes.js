

export default function Cliente(){
const buscaClientes = async () =>{
   
    const res = await fetch("https://api.mercadopago.com/users/test_user",{
        body: '{"site_id":"MLB"}',
        headers: {
            "Authorization": "Bearer APP_USR-8155162828679316-050618-6fac7991e5b1186fec476817644af7d1-1081753292",
            "Content-Type": "application/json"
          },
          method: "POST"
    }) 

const result = await res.json()
console.log(result)
}
    return(
<button onClick={buscaClientes}>clica ae</button>
    )
    
}