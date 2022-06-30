var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken("APP_USR-8155162828679316-050618-6fac7991e5b1186fec476817644af7d1-1081753292");

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
    }
}