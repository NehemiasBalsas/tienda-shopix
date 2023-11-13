import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { emailRegex, passwdRegex } from "@/utils/regex";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function POST(req: Request) {
    const usuario = await req.json();

    if(!usuario.email.match(emailRegex)) return new Response(JSON.stringify({ msg:"Email Incorrecto"}), {status: 400})
    if(!usuario.password.match(passwdRegex)) return new Response(JSON.stringify({ msg:"Contraseña Incorrecto"}), {status: 400})

    const cuentaEnDb = await prisma.usuarios.findUnique({
        where: {
            email: usuario.email,
        },
    })

    if (!cuentaEnDb) return new Response(JSON.stringify({ msg:"Cuenta no existe"}), {status: 403})

    const contrasenaValida = await compare(usuario.password, cuentaEnDb.password)

    console.log(contrasenaValida)

    if(!contrasenaValida) return new Response(JSON.stringify({ msg:"Contraseña Incorrecta"}), {status:401})
    const token = sign(cuentaEnDb, process.env.TOKEN_SECRET as string, {
        expiresIn: "7d",
    })

    return new Response(JSON.stringify({ token }), { status: 201 })
}