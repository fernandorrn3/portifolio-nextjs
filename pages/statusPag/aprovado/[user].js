import Router, { useRouter } from "next/router"
import { useEffect } from "react"
export default function Aprovado(){
    const router = useRouter()
    const {user} = router.query
useEffect(()=>{
    
})
    return(
        <div>
            <h1>Compra aprovada {user}</h1>
        </div>
    )
}