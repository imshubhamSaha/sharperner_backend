const http = require("http");
const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<head><title>My first backend server</title></head>");
  res.write("<body><h1>Shubham Saha</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
