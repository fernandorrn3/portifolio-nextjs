const frete = require('frete');
export default function CalculoFrete(req, res) {
    switch (req.method) {
        
        case 'POST':
            console.log(frete)
         
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
            .preco('13466321', function (err, results) {
                console.log(err);
                console.log(results);
            });
            break;
    }
}