const express = require("express")
const socket = require("socket.io")
const path = require("path")
const fs = require("fs")

const app = express() 
const PORT = process.env.PORT || 3000

app.get("/chat.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, "public")))

const server = app.listen(PORT, () => {
    console.log("servidor activo pa")
})
 
const io = socket(server)

io.on("connection", (socket) => {
    console.log(`nuevo usuario pa: ${socket.id}`)

    socket.on("chat:mensaje", (mensaje) => {
        console.log(mensaje)
        io.sockets.emit("chat:mensaje",mensaje)
    })
})
