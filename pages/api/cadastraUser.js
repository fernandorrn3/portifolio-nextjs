// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient,Prisma } = require('@prisma/client')



const prisma = new PrismaClient({
  errorFormat: 'pretty'
})


export default async function handler(req, res) {
   
  switch(req.method ){
case 'POST':

  var result = '';
  for (var i = 80; i > 0; --i) result += (Math.floor(Math.random()*256)).toString(16);
  let checaadm;

if(!req.body.name && !req.body.email && !req.body.senha){
 
 res.status(400).json({enviou:'preencha todos os campos '})
}

  
  
  
  //cadastrou, salvou o link e enviou o email para o usuario para ele clicar no link e confirmar que é ele mesmo
  
       async function main(){
       
       
        
    
       
        res.status(200).json({mensagem:'passou viado'})
       
       
        
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
     




  

      
    break;
  case 'GET':
    res.json('ola mundo')
      break;  
  }
 
}
