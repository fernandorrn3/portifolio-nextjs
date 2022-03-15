const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
    errorFormat:'pretty'
})
export default async function handler(req, res){
switch(req.method){
case 'POST':


async function main(){
    const findemail = await prisma.User.findUnique({
        where:{
            email:req.body.username
            
        }
    })

   const findPass = await prisma.User.findMany({
     where:{
       senha:req.body.password
     },
    
   })

   if(findPass.length === 0){
     console.log('senha errada')

     res.status(400).json({error:'senha errada'})
   }

   res.json(findemail) 

   
    
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