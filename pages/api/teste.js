export default function handler(req,res){
    switch(req.method){
        case "POST":
            res.json({mensagem:'ola mundo'})
            break;
    }
}