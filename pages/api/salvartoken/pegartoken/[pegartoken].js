import { Main } from 'next/document'

const {PrismaClient,Prisma}  = require ('@prisma/client')
const prisma = new PrismaClient({errorFormat: 'pretty'})
  
export default function handler(req,res){
  const {pegartoken} = req.query
  console.log(req.query)
switch(req.method){
    case 'GET':
      async function  Main(){
const getTokenuser = await prisma.user.findUnique({
    where:{
        username:pegartoken
    },
    select:{
        username:true,
        token:{
select:{
    codigo:true
}
        }
    }
})

res.json({mensagem:getTokenuser})
       }
       Main()
       .catch((e) => {
        throw e
      })
        .finally(async () => {
          console.log('fecheou')
          await prisma.$disconnect()
         
        })
        break;
}
}