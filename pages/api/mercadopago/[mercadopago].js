var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("TEST-8858163312914307-071117-a4ff00221a96edaed4b73410e09df6b1-1158821207");
//preciso identificar o usuario que fez a compra

export default function Mercadopago (req,res){
   
    switch(req.method){
        case "POST":
          mercadopago.payment.save(req.body)
          .then(function(response) {
            const { status, status_detail, id } = response.body;
            res.status(response.status).json({ status, status_detail, id });
          })
          .catch(function(error) {
            console.error(error);
          });
   
            break;

            case'GET':
            res.send('body')
            console.log(mercadopago)
            break;
    }
}