// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export default function handler(req, res) {
  
 

async function main() {
  const allUsers = await prisma.user.findMany()
  console.log('adoleta asd asfsdfsd')
  res.status(200).json(allUsers)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}
