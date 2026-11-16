// Simulated database arrays
const eBins = [
  { binId: "BIN-01", location: "Ang Mo Kio Hub", acceptedTypes: ["ICT", "Batteries"], currentKg: 18, maxKg: 25 },
  { binId: "BIN-02", location: "Tampines Mall", acceptedTypes: ["ICT", "Batteries", "Bulbs"], currentKg: 24, maxKg: 25 },
  { binId: "BIN-03", location: "Jurong Point", acceptedTypes: ["Batteries", "Bulbs"], currentKg: 5, maxKg: 20 }
];

const recyclingLogs = [
  { logId: 1, userId: "U101", binId: "BIN-01", itemType: "ICT", weightKg: 2, pointsEarned: 40 }
];

module.exports = {
    // Explain what function A does
    functionA() {
        return 1+2;
    },
    // Explain what function B does
    functionB() {
        console.log("Hello function B");
    }
}
