const express = require("express");

const http = require("http");
const {Server} = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static("public"))
const server = http.createServer(app);

const io = new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

io.on("connection",(client)=>{
    client.on("message",(text)=>{
        console.log(text);
    })
})




server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});