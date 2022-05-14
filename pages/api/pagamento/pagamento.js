const mercadopago = require('mercadopago');
export default function handler(req,res){
    
    //criar conta comprador teste no mercado pago
    //criar conta vendedor teste mercado pago
    
    switch(req.method){
        case 'POST':
            mercadopago.configurations.setAccessToken("APP_USR-433163157855430-051423-72c3e6a086ea0bef4e4ff7d968c3c9bc-1123956850");
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