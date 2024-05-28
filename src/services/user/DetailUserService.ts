import prismaClient from "../../prisma";
import { PrismaClient } from "@prisma/client";

class DetailUserService{
    async execute(user_id:string){

        const user = await prismaClient.usuario.findFirst(
            {
            where :{
                id: user_id
            },
            select:{
                id: true,
                nome: true,
                email: true
            }
        }
    )

        return user;
    }
}

export{DetailUserService}