const {PrismaClient,Prisma}  = require ('@prisma/client')
import verificaPermisao from "../../../lib/verificauser";
export default function handler(req,res){
    const prisma = new PrismaClient({errorFormat: 'pretty'})
    const { user } = req.query
    

    verificaPermisao(user,req,res)

}