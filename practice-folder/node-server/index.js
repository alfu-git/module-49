const http = require("http");
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Node server res to homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Node res to about page");
  }
  
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
