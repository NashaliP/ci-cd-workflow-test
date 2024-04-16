const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

server.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})

