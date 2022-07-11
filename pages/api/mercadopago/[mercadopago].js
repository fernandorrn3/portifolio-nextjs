var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("TEST-5759687126222695-063012-18bca70c03bd70d55b65b45bba88e726-1152142933");
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