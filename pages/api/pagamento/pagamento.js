const mercadopago = require('mercadopago');
export default function handler(req,res){
    
    //criar conta comprador teste no mercado pago
    //criar conta vendedor teste mercado pago
    
    switch(req.method){
        case 'POST':
            mercadopago.configurations.setAccessToken("TEST-8040008064625736-051422-6c97c1694b4899e6b1d9f2ac03f9a873-1123961101");
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