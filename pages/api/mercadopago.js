var mercadopago = require('mercadopago');
let body

export default function Mercadopago (req,res){
    switch(req.method){
        case "POST":
          body = req.body
   res.json(req.body)
            break;

            case'GET':
            res.send(body)
            break;
    }
}