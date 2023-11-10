import { emailRegex, soloNumero } from "@/utils/regex"
import { PrismaClient } from "@prisma/client"
import { sign } from "jsonwebtoken"

export async function POST(req: Request) {
    const Prisma = new PrismaClient();
    const facturacion = await req.json()

    if(Object.values(facturacion).includes(null) ){
        return new Response(JSON.stringify({ msg:"Error! Faltan datos"}), {status: 400})
    }
    if(!facturacion.email.match(emailRegex)) 
    return new Response("Email Invalido", {status: 400})
    if(!facturacion.altura.match(soloNumero)) 
    return new Response("Por favor ingresa solo numeros", {status: 400})
    if(!facturacion.cpostal.match(soloNumero)) 
    return new Response("Por favor ingresa solo numeros", {status: 400})
    if(!facturacion.dni.match(soloNumero)) 
    return new Response("Por favor ingresa solo numeros", {status: 400})
    if(!facturacion.telefono.match(soloNumero)) 
    return new Response("Por favor ingresa un numero de telefono valido", {status: 400})

    const facturaAGuardar = { ...facturacion};

    const facturaSubida = await Prisma.facturacion.create({ data: facturaAGuardar })

    if(!facturaSubida) 
    return new Response(JSON.stringify({ msg: "Por favor revisa los datos o vuelve a intentarlo mas tarde"}), {status: 500})

    const token = sign(facturaAGuardar, process.env.TOKEN_SECRET as string)

    return new Response(JSON.stringify({token}), {status: 201})
}