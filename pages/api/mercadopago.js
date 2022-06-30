var mercadopago = require('mercadopago');


export default function Mercadopago (req,res){
    switch(req.method){
        case "POST":
   res.json(req.body)
            break;
    }
}