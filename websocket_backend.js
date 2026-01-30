const express = require("express");

const http = require("http");
const {Server} = require("socket.io");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//serving static html files
app.use(express.static("public"))
const server = http.createServer(app);

//creating a socket.io server to upgrade http requests
const io = new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/UI.html");
})

// listening for connections and messages from clients
io.on("connection",(client)=>{
    client.on("message",(text)=>{
        console.log(text);
    })
})




server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});