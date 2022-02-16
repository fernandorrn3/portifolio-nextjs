// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export default async function handler(req, res) {
   
  switch(req.method ){
case 'POST':
    console.log(req.body.email)
    const newUser = await prisma.user.create({
        data: {
          name: 'leandro',
          email:'jotinha@gmail.com',
         senha: 'sdfsdfsdfsdf',
          isAdmin:true
        },
      })
      
      const users = await prisma.user.findMany()

      res.json(req.body.email)
    break;
  case 'GET':
    
      break;  
  }
 
}
