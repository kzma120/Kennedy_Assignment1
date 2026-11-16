description: "ALBA E-Waste Recycling & Rewards Manager",

    // Simulated database arrays & user points
    eBins: [
        { binId: "BIN-01", location: "Ang Mo Kio Hub", type: "ICT", currentKg: 18, maxKg: 25 },
        { binId: "BIN-02", location: "Tampines Mall", type: "Batteries", currentKg: 24, maxKg: 25 },
        { binId: "BIN-03", location: "Jurong Point", type: "Bulbs", currentKg: 5, maxKg: 20 }
    ],

    recyclingLogs: [],

    userPoints: {
        U101: 40,
        U102: 10
    },

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
