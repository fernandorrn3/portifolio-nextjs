const { Prisma, PrismaClient } = require('@prisma/client')
export default function Salvarprodutos(req, res) {
    const { user } = req.query
    const prisma = new PrismaClient({ errorFormat: 'pretty' })
    switch (req.method) {
        case 'POST':


            //cria o produto
            //categoria ativo? cria categoria e conecta ao produto
            //detalhes ativo? cria detalhes e conecta ao produto
            //caracteristica ativo? cria caracteristica e conecta ao produto

            //conecta produto a categoria
            //conecta o produto a detalhes
            //conecta a produto a categoria

            //conecta produto a usuario
            //retorna esse produto para inseri-lo na loja redux

            console.log(req.body)
            console.log(user)

           async function Main() {
                const produtos = await prisma.produtos.create({

                    data: {
                        title: req.body.titulo,
                        description: req.body.descricao,
                        quantity: req.body.quantidade,
                        unit_price: req.body.preco


                    }
                })


                if (req.body.categoriaAtiva == 'ativado') {
                    console.log('entrou categoria')
                    const categoria = await prisma.catProd.create({
                        data: {
                            catNome: req.body.categoria,
                            produtos: {
                                connect: {
                                    title: req.body.titulo
                                }
                            }
                        }
                    })
                }


                if (req.body.detalhesAtiva == 'ativado') {
                    console.log('entrou detalhes')
                    const detahleProduto = await prisma.editorprod.create({
                        data: {
                            nome: 'detalhes',
                            conteudo: req.body.enviarDetalhes.data,
                            produto: {
                                connect: {
                                    title: req.body.titulo
                                }
                            }
                        }
                    })
                }
                if (req.body.caracteristicasAtiva == 'ativado') {
                   
                    console.log('entrou caracteristicas')
                    const caractereProdutos = await prisma.editorprod.create({
                        data: {
                            nome: 'caracteristicas ',
                            conteudo: req.body.enviarCaracter.data,
                            produto: {
                                connect: {
                                    title: req.body.titulo
                                }
                            }
                        }
                    })
                }

                const relacionarUsuario = await prisma.user.update({
                    where: {
                        username: req.query.user
                    },
                    data: {
                        produtos: {
                            connect: {
                                title: req.body.titulo
                            }
                        }
                    }
                })


                res.json(produtos)
                
            }
            Main()
                .catch((e) => {
                    throw e
                })

                .finally(async () => {
                    await prisma.$disconnect()
                })

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