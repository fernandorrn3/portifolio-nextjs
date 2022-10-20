export default function WebHook (req,res){
switch(req.method){
    case 'GET':
        console.log(req.body)
        break;

        case 'POST':
            console.log(req.body)
            break;
}
}