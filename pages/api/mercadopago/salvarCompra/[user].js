const { PrismaClient, Prisma } = require('@prisma/client')
export default function Salvarcompras(req, res) {
    const prisma = new PrismaClient({ errorFormat: 'pretty' })

    switch (req.method) {
        case 'POST':
            async function main() {
                const addcompra = await prisma.user.update({
                    where: {
                        username: req.query.user
                    },
                    data: {
                        compras: {
                            createMany: {
                                data: {
                                    produto: 'uma camisa',
                                    idProduto: req.body,
                                    pago: true

                                }
                            }
                        }
                    }
                })
                res.json({ mensagem: 'testando-aplicacao' })
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