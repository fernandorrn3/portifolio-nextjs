const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({
  errorFormat: 'pretty'
})
export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
console.log(req.body.username)

      async function main() {
        const findemail = await prisma.User.findUnique({
          where: {
             email:req.body.username
          },
        
          
        })

      const usuario = {
username:findemail.username,
email:findemail.email
      }

    try{
if(findemail === null) throw "email incorreto"
if(findemail.senha != req.body.password) throw 'senha errada'
if(findemail.email === req.body.username && findemail.senha === req.body.password) res.status(200).json(usuario)
    }

    catch(err){
     
      res.status(400).json({mensagem:err})
      

    }

     

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