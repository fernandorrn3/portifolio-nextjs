const { PrismaClient, Prisma } = require('@prisma/client')

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

export default async function handler(req, res) {
    const { user } = req.query

    switch (req.method) {
        case 'POST':
            async function main() {
                if (req.body.criado == 'usuario') {
                    var result = '';
                    for (var i = 80; i > 0; --i) result += (Math.floor(Math.random() * 256)).toString(16);
                    let checaadm;

                    if (!req.body.name && !req.body.email && !req.body.senha) {
                        res.status(400).json({ enviou: 'preencha todos os campos ' })
                    }


                    const users = await prisma.user.findMany({})
                    console.log(users)
                    if (!users.length) {
                        console.log('array vazio')
                        checaadm = true;
                    } else {
                        console.log('array cheio')
                        checaadm = false;
                    }

                    try {
                        await prisma.User.create({
                            data: {
                                name: req.body.name,
                                lastName: req.body.lastname,
                                username: req.body.username,
                                email: req.body.email,
                                senha: req.body.senha,
                                emailVerified: false,
                                linkemail: result,
                                isAdm: checaadm,
                            }

                        })
                    }
                    catch (e) {
                        console.log(e.code)
                        if (e instanceof Prisma.PrismaClientKnownRequestError) {
                            res.status(400).json({ mensagem: e.meta.target + ' ja utilizado' })
                        }
                    }
                    res.status(200).json({ mensagem: 'usuario criado com sucesso' })
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
        //===============================================================
        case 'GET':



            async function pegarEndereco() {

                const selecionarEndereco = await prisma.user.findMany({
                    where: {
                        username: user
                    },
                    select: {
                        username: true,
                        endereco: true
                    }
                })
              
                try {
                    if (selecionarEndereco[0].endereco === null) throw 'nao possui endereco cadastrado'
                    if (selecionarEndereco[0].endereco) res.status(200).json(selecionarEndereco)
                }

                catch (err) {
                    console.log(err)
                    res.status(404).json({ mensagem: err })
                }

            }
            pegarEndereco()
                .catch((e) => {
                    throw e
                })
                .finally(async () => {
                    await prisma.$disconnect()
                })
            break;
        //================================================================
        case 'PUT':
            async function atualiza() {
                const endereco = await prisma.endereco.create({
                    data: {
                        cep: req.body.cep,
                        estado: req.body.estado,
                        cidade: req.body.cidade,
                        rua: req.body.rua,
                        numeroRua: parseInt(req.body.numeroRua),
                        complemento: req.body.complemento,
                        user: {
                            connect: {
                                username: req.body.usuario
                            }
                        }
                    }
                })

                res.json(endereco)
            }

            atualiza()
                .catch((e) => {
                    throw e
                })

                .finally(async () => {
                    await prisma.$disconnect()
                })

            break;
    }

}
