const { Prisma, PrismaClient } = require('@prisma/client')
export default function Salvarprodutos(req, res) {
    const prisma = new PrismaClient({ errorFormat: 'pretty' })
    switch (req.method) {
        case 'POST':
            console.log(req.body)
            console.log(req.query.user)
            res.json({ mensagem: 'produto salvo com sucesso' })
           /* async function Main() {
                const user = await prisma.user.update({
                    where: {
                        username: req.query.user
                    },
                    data: {
                        produtos: {
                            createMany: {
                                data: {
                                    title:req.body.titulo,
                                    description:req.body.descrição,
                                    category_name:req.body.category_name,
                                    quantity:req.body.quantidade,
                                    unit_price:req.body.preço

                                }
                            }
                        }
                    }
                })
              
            }
            Main()
                .catch((e) => {
                    throw e
                })

                .finally(async () => {
                    await prisma.$disconnect()
                })*/

            break;
    }
}