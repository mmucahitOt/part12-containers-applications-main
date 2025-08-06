console.log("=== IPv4 Address Structure ===\n");

console.log("Regular Device IP: 192.168.1.100");
console.log("│   │   │   │");
console.log("│   │   │   └── Host ID (100)");
console.log("│   │   └────── Network ID (1)");
console.log("│   └────────── Network ID (168)");
console.log("└────────────── Network ID (192)\n");

console.log("=== Why Special Addresses Aren't Used by Devices ===\n");

console.log("1. 255.255.255.255 (Broadcast)");
console.log("   - Binary: 11111111.11111111.11111111.11111111");
console.log("   - Meaning: 'Send to ALL devices on network'");
console.log("   - Used for: Network discovery, DHCP requests");
console.log("   - Device can't use this as its address\n");

console.log("2. 127.0.0.1 (Loopback)");
console.log("   - Binary: 01111111.00000000.00000000.00000001");
console.log("   - Meaning: 'This computer itself'");
console.log("   - Used for: Local testing, self-reference");
console.log("   - Device can't use this as its address\n");

console.log("3. 0.0.0.0 (All Interfaces)");
console.log("   - Binary: 00000000.00000000.00000000.00000000");
console.log("   - Meaning: 'Listen on all network interfaces'");
console.log("   - Used for: Server binding, routing");
console.log("   - Device can't use this as its address\n");

console.log("=== Network Address Ranges ===\n");

console.log("Private Networks (Used by devices):");
console.log("- 10.0.0.0/8     → 10.x.x.x");
console.log("- 172.16.0.0/12  → 172.16-31.x.x");
console.log("- 192.168.0.0/16 → 192.168.x.x");
console.log("These ARE used by devices!\n");

console.log("Reserved Networks (NOT used by devices):");
console.log("- 127.0.0.0/8    → 127.x.x.x (loopback)");
console.log("- 224.0.0.0/4    → 224.x.x.x (multicast)");
console.log("- 240.0.0.0/4    → 240.x.x.x (reserved)");
console.log("- 0.0.0.0/8      → 0.x.x.x (current network)");

console.log("\n=== Real-World Example ===\n");

console.log("Your Home Network:");
console.log("Router:     192.168.1.1");
console.log("Your PC:    192.168.1.100");
console.log("Your Phone: 192.168.1.101");
console.log("Your TV:    192.168.1.102");
console.log("");
console.log("Special Addresses (NOT devices):");
console.log("Broadcast:  192.168.1.255 (sends to all devices)");
console.log("Network:    192.168.1.0 (represents the network)");

console.log("\n=== How Routers Handle Special Addresses ===\n");

console.log("When router sees 255.255.255.255:");
console.log("→ 'This is a broadcast message'");
console.log("→ 'Send to ALL devices on my network'");
console.log("→ NOT 'This is a device address'\n");

console.log("When router sees 127.0.0.1:");
console.log("→ 'This is a loopback address'");
console.log("→ 'Route back to sender'");
console.log("→ NOT 'This is a device address'\n");

console.log("When router sees 0.0.0.0:");
console.log("→ 'This means current network'");
console.log("→ 'Use my network interface'");
console.log("→ NOT 'This is a device address'");

console.log("\n=== Summary ===\n");
console.log("✅ Device addresses: 192.168.1.100, 10.0.0.1, etc.");
console.log("❌ Special addresses: 255.255.255.255, 127.0.0.1, 0.0.0.0");
console.log(
  "📡 Routers recognize special addresses and handle them differently"
);
console.log("🏠 Your devices use regular private IP addresses");
