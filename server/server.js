const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Hello World! Dev took over. Its the rising of dev. We will take down protheans and degenerates who drink anlene");
})

server.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})

