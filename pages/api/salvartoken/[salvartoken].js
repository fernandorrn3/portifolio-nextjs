const {PrismaClient,Prisma}  = require ('@prisma/client')
export default function handler(req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    const { salvartoken } = req.query
    console.log(req.query)
switch(req.method){

    case "POST":
       
async function main(){

    const checatoken = await prisma.user.findUnique({
where:{
    username:salvartoken
},

include:{
   token:{
       select:{
           codigo:true
       }
   } 
}
    })
    
    
   

    if(checatoken.token === null){
 const user = await prisma.user.update({
        where: {
          username: salvartoken,
        },
        data: {
          token: {
            create: {
            clientid: req.body.clientid,
            acesstoken:req.body.secret
            },
          },
        },
      })

      res.json({mensagem:'token de acesso salvo com sucesso'})
    } 

    

      res.json({mensagem:'Voce ja possui o token de acesso'})
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