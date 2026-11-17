module.exports = {
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
    
    // Explain what function A does
    findAvailableBins(itemType) {
        let results = [];
        for (let i = 0; i < this.eBins.length; i++){
            let bin = this.eBins[i];
            if (bin.type === itemType && bin.currentKg < bin.maxKg){
                results.push(bin);
            }
        }
        return results;
    },
    // Explain what function B does
    calculatePoints(itemType, weightKg) {
       if (itemType === "ICT") {
        return weightKg * 20;
       } 
       else if (itemType === "Batteries") {
        return weightKg * 15;
       }
       else{
        return weightKg * 10;
       }
    },

    //
    logDropOff(userId, binId, itemType, weightKg){
        let selectedBin = null;
        for (let i = 0; i < this.eBins.length; i++){
            if (this.eBins[i].binId === binId){
                selectedBin = this.eBins[i];
                break;
            }
        }
        if (selectedBin === null) {
            return "Error occurred.";
        }
        if (selectedBin.type !== itemType){
            return "This is the wrong bin."
        }
        if (selectedBin.currentKg + weightKg > selectedBin.maxKg){
            return "This bin is full."
        }
        selectedBin.currentKg = selectedBin.currentKg + weightKg;
        let pointsEarned = this.calculatePoints(itemType,weightKg);
        if (this.userPoints[userId] === undefined){
            this.userPoints[userId] = 0;
        }
        this.userPoints[userId] = this.userPoints[userId] + pointsEarned;
        this.recyclingLogs.push({
            userId: userId,
            binId: binId,
            itemType: itemType,
            weightKg: weightKg,
            points: pointsEarned
        });
        return "Recycling Log updated successfully."
    },

    //
    redeemVoucher(userId, pointsNeeded){
        let currentPoints = this.userPoints[userId];
        if (currentPoints === undefined){
            currentPoints = 0;
        }
        if (currentPoints < pointsNeeded){
            return  "User does not have enough points to redeem the voucher. The current point user have is :" + currentPoints;
        }
        this.userPoints[userId] = currentPoints - pointsNeeded;
        return "Redeemed voucher successfully!"
    },

    //
    getFullBins(){
        let fullBins = [];
        for (let i = 0; i < this.eBins.length; i++){
            let bin = this.eBins[i];
            if (bin.currentKg/bin.maxKg  >= 0.8){
                fullBins.push(bin);
            }
        }

        return fullBins;
    },
}
