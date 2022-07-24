const { PrismaClient, Prisma } = require('@prisma/client')
export default function Salvarcompras(req, res) {
    const prisma = new PrismaClient({ errorFormat: 'pretty' })

    switch (req.method) {
        case 'POST':
            console.log(req.body)
            async function main() {
                const addcompra = await prisma.user.update({
                    where: {
                        username: req.query.user
                    },
                    data: {
                        compras: {
                            createMany: {
                                data: {
                                    Idcompras: req.body,
                                    pago: true
                                }
                            }
                        }
                    }
                })
                res.json({ mensagem: 'Produto salvo' })
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