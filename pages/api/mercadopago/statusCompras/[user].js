import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

export default function statusCompra(req, res) {
    const { user } = req.query

    switch (req.method) {
        case 'GET':
            async function pegarIdCompras() {
                const pegarId = await prisma.user.findUnique({

                })
            }
            pegarIdCompras()
                .catch((e) => {
                    throw e
                })
                .finally(async () => {
                    await prisma.$disconnect()
                })
            break;

        case 'POST':
            console.log(req.body)
            async function inserir() {
                const inserirId = await prisma.compras.create({
                    data: {
                        Idcompras: req.body.idCompras,
                        user: {
                            connect: {
                                username: user
                            }
                        }
                    }
                })

                res.json(inserirId)
            }
            inserir()
                .catch((e) => {
                    throw e
                })
                .finally(async () => {
                    await prisma.$disconnect()
                })

            break;
    }
}