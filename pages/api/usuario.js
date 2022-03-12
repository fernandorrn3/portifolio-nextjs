// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  errorFormat: 'pretty'
})


export default async function handler(req, res) {
   
  switch(req.method ){
case 'POST':




if(!req.body.name && !req.body.email && !req.body.senha){
  console.log('esta vazio')
 res.status(400).json({enviou:'complete os campos '})
} else{

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
            isAdm:checaadm
          }
        })

        res.status(200).json({enviou:'login Feito com sucesso'})
        
      }
  main()

  
      
    .catch((e) => {
      
      res.status(400).json({enviou:'Email ja Cadastrado tente outro'})
      console.log('email cadastrado')
      throw e
  
     
  
      
    })
    .finally(async () => {
      await prisma.$disconnect()
     
    })
     

}


  

      
    break;
  case 'GET':
    
      break;  
  }
 
}
