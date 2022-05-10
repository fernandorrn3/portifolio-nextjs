const {PrismaClient,Prisma}  = require ('@prisma/client')
import verificaPermisao from '../../../lib/verificauser'

export default function handler(req,res){
 
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    const { user } = req.query
    

    verificaPermisao(user,req,res)

 


    /*switch(req.method){
        case 'GET':

        async function main(){
            const finduser = await prisma.user.findUnique({
                where:{
                  username:user
                }
              
              })
              console.log(finduser)
          try {
              if(!finduser.isAdm) throw 'acesso negado rota exclusiva para adm'
              if(finduser.isAdm) res.status(200).json({mensagem: `bem vindo ${user}`  })
          } catch (error) {
              res.status(401).json({mensagem:error})
          }
        }

        main()

        .catch((e) => {
            throw e
          })
          .finally(async () => {
            await prisma.$disconnect()
          })
          
            
        break;
    }*/
    
} 