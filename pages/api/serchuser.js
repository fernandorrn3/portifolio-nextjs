const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
    errorFormat:'pretty'
})
export default async function handler(req, res){
switch(req.method){
case 'POST':

const usuario = {

}

async function main(){
    const finduser = await prisma.User.findUnique({
        where:{
            email:req.body.username
        }
    })

    

   res.json(finduser) 

   
    
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