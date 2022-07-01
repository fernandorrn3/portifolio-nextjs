var mercadopago = require('mercadopago');

//preciso identificar o usuario que fez a compra

export default function Mercadopago (req,res){
    const {mercadopago} = req.query
    switch(req.method){
        case "POST":
        console.log(mercadopago)
          console.log(req.body)
   
          res.send(req.body)
            break;

            case'GET':
            res.send('body')
            console.log(mercadopago)
            break;
    }
}