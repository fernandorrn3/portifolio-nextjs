import { useEffect } from "react"
import { useRouter } from "next/router"
export default function Confirmar (){
    const router = useRouter()

const {enviar} = router.query
useEffect(async ()=>{
if(!enviar){
    return 
    
}

const res = await fetch(process.env.NEXT_PUBLIC_DB_HOST + 'checkemail/' + enviar )

const result = await res.json()
console.log(result)


},[router])



    return(
        <h1>confirma aqui</h1>
    )
}