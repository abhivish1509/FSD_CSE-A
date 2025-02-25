const http = require('http');
const port = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/msg" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.end("<h2>Hello there!!</h2>");
        return;
    }
    
    else if (req.url === "/" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.end("<h2>Welcome to IIT Lalkaun</h2>");
        return;
    }
});

server.listen(port, () => {
    console.log("Server is running on port " + port);
});
