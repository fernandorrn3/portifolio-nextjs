// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export default async function handler(req, res) {
   
  switch(req.method ){
case 'POST':


  const users = await prisma.user.findMany({})
let checaadm;
if(!users.length){
  console.log('array vazio')
  checaadm = true;
}else{
  console.log('array cheio')
  checaadm = false;
}


    async function main(){
      const newUser = await prisma.user.create({
        data: {
          name: req.body.name,
          email:req.body.email,
          senha: req.body.senha,
          isAdmin:checaadm
        }
      })
      
    }
main().then(()=>  res.status(200).json({enviou:'login Feito com sucesso'}))

    
  .catch((e) => {
    
    res.json({enviou:'Email ja Cadastrado tente outro'})
    throw e

   

    
  })
  .finally(async () => {
    await prisma.$disconnect()
   
  })
   
  

      
    break;
  case 'GET':
    
      break;  
  }
 
}
