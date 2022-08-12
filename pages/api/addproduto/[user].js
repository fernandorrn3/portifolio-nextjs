const { Prisma, PrismaClient } = require('@prisma/client')


export default function Salvarprodutos(req, res) {
    const prisma = new PrismaClient({ errorFormat: 'pretty' })
    switch (req.method) {
        case 'POST':




            console.log(req.body.adicionado)
            console.log(req.body)

            async function Main() {

                //criar uma categoria, criar um produto
                //adicionar esse produto a um usuario

                switch (req.body.adicionado) {
                    case 'produtos/categoria':
                        const categoria = await prisma.catProd.create({
                            data: {
                                catNome: req.body.categoria,
                            
                            produtos: {
                                    create:
                                    {
                                        title: req.body.titulo,
                                        description: req.body.descricao,
                                        quantity: req.body.quantidade,
                                        unit_price: req.body.preco
                                    }
                                }
                            }

                            })
                        break;

                    /*case 'produto':
                        const user = await prisma.user.update({
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
                        })
                     break;*/
                }
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
            async function main() {
                const serchloja = await prisma.user.findMany({
                    where: {
                        isAdm: true,
                    },

                    include: {
                        produtos: true
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

                .catch((e) => {
                    throw e
                })

                .finally(async () => {
                    await prisma.$disconnect()
                })
            break;
    }
}