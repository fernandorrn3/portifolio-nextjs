const {PrismaClient,Prisma}  = require ('@prisma/client')

export default function handler(req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    const {checkemail} = req.query
    
    switch(req.method){
        case 'GET':
        async function main(){
            const findLink = await prisma.user.findMany({
                where:{
                    linkemail:checkemail
                }
            })
console.log(findLink)
            try {
                if(findLink.length === 0) throw 'link invalido'
                if(findLink) {
                    const updateStatus = await prisma.user.update({
                        where:{
                            linkemail:checkemail
                        },
                        data:{
                           emailVerified:true 
                        }
                    })

                    res.status(200).json({mensagem:'usuario confirmado com sucesso'})
                } 
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