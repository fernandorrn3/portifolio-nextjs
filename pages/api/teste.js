import { getToken } from "next-auth/jwt"
const secret = 'flamengoamormaior'
export default async function Handler(req,res){
    switch(req.method){
    
        case 'GET':
            const token = await getToken({ req, secret })
            console.log("JSON Web Token", token)
            res.json(token)
        break;
    }
}