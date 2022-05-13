export default function handler(req,res){
    switch(req.method){
        case "GET":
            res.json({mensagem:'ola mundo'})
            break;
    }
}