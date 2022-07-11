import { useRouter } from "next/router"
export default function Testando(){
    const router = useRouter()
    const {user} = router.query
    if(!user){
        return null
    }
    console.log(user)
    const testaapi = async () =>{
        const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST +  'mercadopago/salvarCompra/' + user,{
            method:'POST',
            body: JSON.stringify('1234567')
        })

        const response = await res.json()
        console.log(response)
    }
    return(
        <div>
            <div><h1>ola teste</h1></div>
            <div><button onClick={testaapi}>testa a api compras</button></div>
        </div>
    )
}