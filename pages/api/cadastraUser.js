// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient,Prisma } = require('@prisma/client')



const prisma = new PrismaClient({
  errorFormat: 'pretty'
})

/*
 "id": 1123961101,
    "nickname": "TESTMFSSZIJ6",
    "password": "qatest3854",
    "site_status": "active",
    "email": "test_user_96397872@testuser.com"



{
    "id": 1123956850,
    "nickname": "TESTUMWXWQD7",
    "password": "qatest6058",
    "site_status": "active",
    "email": "test_user_91565392@testuser.com"
}

*/
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
       
        const users = await prisma.user.findMany({})
        console.log(users)
        if(!users.length){
          console.log('array vazio')
          checaadm = true;
        }else{
          console.log('array cheio')
          checaadm = false;
        }
      
    try {
     await prisma.User.create({
       data:{
        name:req.body.name,
        lastName:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        senha:req.body.senha,
        emailVerified:false,
        linkemail:result,
        isAdm:checaadm,
       }

      })
    } 
    catch (e) {
      console.log(e.code)
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({mensagem:e.meta.target + ' ja utilizado'})
      }
    }
       
      
     res.status(200).json({mensagem:'usuario criado com sucesso'}) 
       
        
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
  case 'GET':
    res.json('ola mundo')
      break;  
  }
 
}
