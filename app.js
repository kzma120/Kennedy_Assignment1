const alba = require("./Kennedy_albaEwasteManager.js");

console.log("=== " + alba.description + " ===\n");

console.log("1. Available ICT Bins:");
console.log(alba.findAvailableBins("ICT"));

console.log("\n2. Points for 3kg of ICT:");
console.log(alba.calculatePoints("ICT", 3));

console.log("\n3. Valid Drop-Off (U101 drops 3kg ICT at BIN-01):");
console.log(alba.logDropOff("U101", "BIN-01", "ICT", 3));

console.log("\n4a. Invalid Drop-Off (Wrong bin type):");
console.log(alba.logDropOff("U101", "BIN-01", "Batteries", 2));

console.log("\n4b. Invalid Drop-Off (Bin capacity exceeded):");
console.log(alba.logDropOff("U101", "BIN-02", "Batteries", 5));

console.log("\n5a. Redeem Voucher (U101 redeems 80 points):");
console.log(alba.redeemVoucher("U101", 80));

console.log("\n5b. Redeem Voucher (Insufficient points):");
console.log(alba.redeemVoucher("U101", 50));

console.log("\n6. Bins at >= 80% Capacity:");
console.log(alba.getFullBins());