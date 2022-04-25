import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/router'
function Editpost({error,finduser}) {
    const { data: session, status } = useSession()
    const router = useRouter()
    const { user } = router.query
  
  
  
  
    if (status === "unauthenticated") {
      return(
        <h1>acesso negado, usuario precisa autenticar</h1>
      )
     }
  
  
     if(!session){
       return null;
     }
  
  
  if(session.username != user){
    return (
      <h1>Acesso negado</h1>
    )
  }
  

  
    if (error){
      return(
        <><h1>{error}</h1></>
      )
    } 
    return(
     <div>
       <h1>editar o portifolio</h1>
     </div>
    )
}



export async function getStaticPaths() {

    const { PrismaClient, Prisma } = require('@prisma/client')


    const prisma = new PrismaClient({
        errorFormat: 'pretty'
    })



    const finduser = await prisma.user.findMany({})

    const paths = finduser.map((usuario) => ({
        params: { user: usuario.username }
    }))




    return { paths, fallback: 'blocking' }
}











export async function getStaticProps({ params }) {

    console.log(params)


    const { PrismaClient, Prisma } = require('@prisma/client')
    const prisma = new PrismaClient({
        errorFormat: 'pretty'
    })


    const finduser = await prisma.user.findUnique({
        where: {
            username: params.user
        },
        select: {
            username: true,
            isAdm: true
        }
    })


    try {

        if (finduser === null) throw 'usuario nao encontrado acesso negado'

        if (!finduser.isAdm) throw 'acesso negado, usuario nao tem permissao para acessar essa rota'
        if (finduser.isAdm) return { props: { finduser } }


    } catch (error) {
        return { props: { error } }
    }



    return { props: { params } }

}





export default Editpost



