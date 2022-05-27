const {PrismaClient,Prisma}  = require ('@prisma/client')
export default function handler(req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
switch(req.method){
    case "POST":
async function main(){
    const inseretoken = await prisma.user.update({
        where: {
          username: 'fernandorrn',
        },
       
            create: {
              data: {
                  token:req.body 
              },
            },
     
      })
}

main()

  
      
.catch((e) => {
  throw e
})
  .finally(async () => {
    console.log('fecheou')
    await prisma.$disconnect()
   
  })
    break;

    case "GET":
        res.json({mensagem:'ola mundo'})
        break;
}
}