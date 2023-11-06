const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My first backend server</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My first backend server</title></head>");
    res.write("<body><h1>Welcome to About us page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My first backend server</title></head>");
    res.write("<body><h1>Welcome to my first Node.js Server</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000);
