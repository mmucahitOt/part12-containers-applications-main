const http = require("http");

// Demo 1: Bind to localhost (127.0.0.1)
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server 1: Bound to localhost (127.0.0.1)\n");
});

server1.listen(3001, "127.0.0.1", () => {
  console.log("Server 1 listening on 127.0.0.1:3001");
  console.log("Only accessible from localhost");
});

// Demo 2: Bind to all interfaces (0.0.0.0)
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server 2: Bound to all interfaces (0.0.0.0)\n");
});

server2.listen(3002, "0.0.0.0", () => {
  console.log("Server 2 listening on 0.0.0.0:3002");
  console.log("Accessible from any network interface");
});

console.log("\nTest with:");
console.log("curl http://localhost:3001  # Server 1 (localhost only)");
console.log("curl http://localhost:3002  # Server 2 (all interfaces)");
console.log("curl http://0.0.0.0:3002   # Server 2 (all interfaces)");
