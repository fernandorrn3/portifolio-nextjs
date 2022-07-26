const {PrismaClient,Prisma}  = require ('@prisma/client')
export default async function verificaPermisao (user,req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    switch(req.method){
        case 'GET':

        async function main(){
            const finduser = await prisma.user.findUnique({
                where:{
                  username:user
                }
              
              })
          
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
    }
}



