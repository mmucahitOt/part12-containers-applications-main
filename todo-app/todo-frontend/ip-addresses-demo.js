const http = require("http");
const os = require("os");

console.log("=== Special IP Addresses Demo ===\n");

// Get network interfaces
const interfaces = os.networkInterfaces();
console.log("Available Network Interfaces:");
Object.keys(interfaces).forEach((name) => {
  interfaces[name].forEach((iface) => {
    if (iface.family === "IPv4") {
      console.log(`  ${name}: ${iface.address}`);
    }
  });
});

console.log("\n=== Special IP Addresses ===\n");

// 1. Localhost (127.0.0.1)
console.log("1. 127.0.0.1 (localhost/loopback)");
console.log("   - Only accessible from same machine");
console.log("   - Used for local testing");
console.log("   - Example: http://localhost:3000\n");

// 2. All interfaces (0.0.0.0)
console.log("2. 0.0.0.0 (all interfaces)");
console.log("   - Accepts connections from any interface");
console.log("   - Used for external access");
console.log("   - Example: Server listening on 0.0.0.0:3000\n");

// 3. Broadcast (255.255.255.255)
console.log("3. 255.255.255.255 (broadcast)");
console.log("   - Sends to all hosts on network");
console.log("   - Used for network discovery");
console.log("   - Example: DHCP requests\n");

// 4. Link-local (169.254.x.x)
console.log("4. 169.254.x.x (link-local)");
console.log("   - Automatic IP when DHCP fails");
console.log("   - Local network only");
console.log("   - Example: 169.254.1.100\n");

// 5. Private ranges
console.log("5. Private IP Ranges:");
console.log("   - 10.0.0.0/8 (10.x.x.x)");
console.log("   - 172.16.0.0/12 (172.16-31.x.x)");
console.log("   - 192.168.0.0/16 (192.168.x.x)");
console.log("   - Internal networks only\n");

// 6. Reserved addresses
console.log("6. Other Reserved Addresses:");
console.log("   - 224.0.0.0/4 (multicast)");
console.log("   - 240.0.0.0/4 (reserved)");
console.log("   - 127.0.0.0/8 (loopback range)");

console.log("\n=== Docker Context ===");
console.log("In Docker containers:");
console.log("- 127.0.0.1 = Only accessible from inside container");
console.log("- 0.0.0.0 = Accessible from host machine");
console.log("- Port mapping (-p) creates the network bridge");
console.log("- --host flag makes server bind to 0.0.0.0");

// Demo server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>IP Address Demo</h1>
    <p>Server is running and accessible!</p>
    <p>This demonstrates 0.0.0.0 binding</p>
  `);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("\n=== Demo Server Running ===");
  console.log("Server listening on 0.0.0.0:3000");
  console.log("Accessible from:");
  console.log("- localhost:3000");
  console.log("- 127.0.0.1:3000");
  console.log("- Your machine's IP:3000");
  console.log("- Any network interface:3000");
});
