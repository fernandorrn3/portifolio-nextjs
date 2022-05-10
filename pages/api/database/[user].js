export default function handler(req,res){
    console.log('xoxo')
   
    switch(req.method){
        case 'GET':
            res.status(200).json({mensagem:user})
        break;
    }
    
} 