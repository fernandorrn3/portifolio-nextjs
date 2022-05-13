// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient,Prisma } = require('@prisma/client')

import Enviar from '../../lib/sendmail'

const prisma = new PrismaClient({
  errorFormat: 'pretty'
})


export default async function handler(req, res) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
});
  switch(req.method ){
case 'POST':

  var result = '';
  for (var i = 80; i > 0; --i) result += (Math.floor(Math.random()*256)).toString(16);
  

if(!req.body.name && !req.body.email && !req.body.senha){
 
 res.status(400).json({enviou:'preencha todos os campos '})
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
  
  //cadastrou, salvou o link e enviou o email para o usuario para ele clicar no link e confirmar que é ele mesmo
  
      async function main(){
        const newUser = await prisma.user.create({
          data: {
            name: req.body.name,
            username:req.body.username,
            email:req.body.email,
            senha: req.body.senha,
            isAdm:checaadm,
            emailVerified:false,
            linkemail: result
          }
        })
    
        Enviar(req.body.username,result).catch(console.error)
        res.status(200)
       
        res.json({enviou:'Cadastro Feito com sucesso'})
        
      }
  main()

  
      
    .catch((e) => {
      if(e instanceof Prisma.PrismaClientKnownRequestError){
        res.status(400)
        res.json({enviou: e.meta.target + ' ja cadastrado tente outro'})
      }
      
      
      throw e
  
     
  
      
    })
    .finally(async () => {
      await prisma.$disconnect()
     
    })
     

}


  

      
    break;
  case 'GET':
    res.json('ola mundo')
      break;  
  }
 
}
