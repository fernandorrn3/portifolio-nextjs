import Enviar from "../../lib/sendmail";
export default function handler(req,res){
    switch(req.method){
        case "POST":
            Enviar('fernando','linkaleatoriosoparatestes')
            res.status(200)
            res.json({mensagem:'ola mundo'})
            break;
    }
}