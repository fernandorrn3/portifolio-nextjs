import { useRouter } from "next/router"
export default function Error(){
    const router = useRouter()
    console.log(router.query)
    return(<><h1>deu erro champs tente outra vez</h1></>)
}