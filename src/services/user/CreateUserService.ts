import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    nome: string
    email: string
    senha: string
}



class CreateUserService{

    async execute({nome, email, senha}:UserRequest){
        
        
        //verificar se foi enviado o valor do e-mail
        if(!email){
            throw new Error("E-mail não enviado!");
        }
        
        //verifica se o email já foi cadastrado
        const userAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("E-mail informado já está cadastrado!");
        }


        const senhaHash = await hash(senha, 8);
        
        //cadastro no banco de dados 
        const user = await prismaClient.usuario.create({
            data:{
                nome: nome,
                email: email,
                senha: senhaHash,
            },
            select:{
                id:true,
                nome: true,
                email: true,
            }
        })
        
        return user;
    }

}

export{CreateUserService}