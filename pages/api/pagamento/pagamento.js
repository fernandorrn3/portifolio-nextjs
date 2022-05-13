const mercadopago = require('mercadopago');
export default function handler(req,res){
    
    
    
    switch(req.method){
        case 'POST':
            mercadopago.configurations.setAccessToken("APP_USR-8155162828679316-050618-6fac7991e5b1186fec476817644af7d1-1081753292");
            mercadopago.payment.save(req.body)
          .then(function(response) {
            console.log('alo mundo passou')
            const { status, status_detail, id } = response.body;
            res.status(response.status).json({ status, status_detail, id });
          })
          .catch(function(error) {
            console.log('alo mundo reprovou')
            console.error(error);
            res.status(400).json({ mensagem:error});
          });
            break;
    }
 
}