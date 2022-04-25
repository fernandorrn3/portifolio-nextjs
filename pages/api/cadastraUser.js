// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient,Prisma } = require('@prisma/client')


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
            username:req.body.username,
            email:req.body.email,
            senha: req.body.senha,
            isAdm:checaadm
          }
        })

        res.status(200).json({enviou:'Cadastro Feito com sucesso'})
        
      }
  main()

  
      
    .catch((e) => {
      if(e instanceof Prisma.PrismaClientKnownRequestError){
        res.status(400).json({enviou: e.meta.target + ' ja cadastrado tente outro'})
      }
      
      
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
