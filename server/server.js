const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Hello World! This is a weird test! Testing 101. Just testing sonarcloud!");
})

server.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})

what