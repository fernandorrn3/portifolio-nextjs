const {PrismaClient,Prisma}  = require ('@prisma/client')
import verificaPermisao from "../../../lib/verificauser";
export default function handler(req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    const { user } = req.query
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
              if(finduser.isAdm){ 
                res.status(200).json('admin') 
                
              } 
          } catch (error) {
              res.status(401).json('usuario')
              
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

    //verificaPermisao(user,req,res)

}