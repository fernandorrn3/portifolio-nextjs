const frete = require('frete')
export default function CalcularFrete(req,res){
switch(req.method){
    case 'POST':
        console.log(req.body)
    frete()
    .cepOrigem('13467460')
    .peso(1)
    .formato(frete.formatos.caixaPacote)
    .comprimento(16)
    .altura(2)
    .largura(11)
    .diametro(1)
    .maoPropria('sim')
    .valorDeclarado(50)
    .avisoRecebimento('sim')
    .servico(frete.servicos.sedex)
    .precoPrazo('13466321', async function (err, results) {
        console.log(err);
        const resultado = await results
      res.json(resultado)
    });
        break;
}
}