import { emailRegex, passwdRegex } from "@/utils/regex"
import { log } from "console"
import { encriptarPasswd } from "@/utils/encrip"
import { PrismaClient } from "@prisma/client"
import { sign } from "jsonwebtoken"

export async function POST(req: Request) {
    const Prisma = new PrismaClient();
    const usuario = await req.json()

    if(Object.values(usuario).includes(null) ){
        return new Response(JSON.stringify({ msg:"Error! Faltan datos"}), {status: 400})
    }
    if(!usuario.password.match(passwdRegex)) 
    return new Response(JSON.stringify({ msg:"Contraseña no valida"}), {status: 400})
    if(!usuario.email.match(emailRegex)) 
    return new Response("Email Invalido", {status: 400})

    const passwdHash = await encriptarPasswd(usuario.password)

    const usuarioAGuardar = { ...usuario, password: passwdHash};

    const usuarioSubido = await Prisma.usuarios.create({ data: usuarioAGuardar })

    if(!usuarioSubido) 
    return new Response(JSON.stringify({ msg: "no se pudo subir el usuario"}), {status: 500})

    const token = sign(usuarioAGuardar, process.env.TOKEN_SECRET as string)

    console.log(passwdHash)
    return new Response(JSON.stringify({token}), {status: 201})
}