const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Hello World!Welcome hello  you guysss whats good homiesssss!");
})

server.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})

