// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export default function handler(req, res) {
  switch(req.method ){
case 'POST':
    console.log('rota post')
    break;
  case 'GET':
      console.log('get')
      console.log('rota get')
      break;  
  }
 
}
