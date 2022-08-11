const { Prisma, PrismaClient } = require('@prisma/client')


export default function Salvarprodutos(req, res) {
    const prisma = new PrismaClient({ errorFormat: 'pretty' })
    switch (req.method) {
        case 'POST':
         
     //caso propriedade e valor estejam vazios adiciona somente o produto
     //caso propriedade e valor estejam cheios adiciona o produto o a propriedade e o valor

     //adicionar caracteristicas a produto especifico
     //achar esse produto pelo titulo


     //cria um produto e conecta a um usuario existente
     //cria uma nova categoria e conecta a esse produto existente
     
     
            console.log(req.body)
            console.log(req.query.user)
      
           async function Main() {


                /*const user = await prisma.user.update({
                    where: {
                        username: req.query.user
                    },
                    data: {
                        produtos: {
                            createMany: {
                                data: {
                                    title:req.body.titulo,
                                    description:req.body.descricao,                                   
                                    quantity:req.body.quantidade,
                                    unit_price:req.body.preco

                                }
                            }
                        }


                    }
                })*/
              
            }
            Main()
                .catch((e) => {
                    throw e
                })

                .finally(async () => {
                    await prisma.$disconnect()
                })
                res.json({ mensagem: 'produto salvo com sucesso' })
            break;

            case 'GET':
 async function main(){
const serchloja = await prisma.user.findMany({
    where:{
        isAdm:true,
},

include:{
    produtos:true
}

/*id            Int       @id @default(autoincrement())
  name          String
  lastName      String
  username      String    @unique
  email         String    @unique
  senha         String
  emailVerified Boolean
  linkemail     String
  isAdm         Boolean   @default(false)
  image         String?*/

   
})

res.json(serchloja[0].produtos)
 }

 main()

 .catch((e)=>{
    throw e
 })
 
 .finally(async ()=>{
    await prisma.$disconnect()
 })
            break;
    }
}