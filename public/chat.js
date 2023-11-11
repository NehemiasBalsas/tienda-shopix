const socket = io()

const mensaje = document.getElementById("mensaje")
const username = document.getElementById("username")
const enviar = document.getElementById("enviar")
const listaMensajes = document.getElementById("output")

enviar.addEventListener("click", () => {
    socket.emit("chat:mensaje", { mensaje: username.value, contenido: mensaje.value })
    
    mensaje.value = ""
})

socket.on("chat:mensaje", (mensaje) => {
    listaMensajes.innerHTML += `
    <p>${mensaje.usuario}: ${mensaje.contenido}
    `
})
