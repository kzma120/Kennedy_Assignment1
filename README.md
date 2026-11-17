# Assignment 1: ALBA E-Waste Recycling & Rewards Manager

This Node.js module simulates the core backend functionality of **ALBA E-Waste Singapore**, allowing users to locate available e-waste recycling bins, calculate reward points, log drop-offs, redeem vouchers, and monitor bins nearing full capacity.

---

## Setup Instructions

1. Ensure **Node.js** is installed on your machine.
2. Place `Kennedy_albaEwasteManager.js` in your project folder.
3. Create a driver script (e.g., `app.js`) in the same folder and import the module using `require()`:

```javascript
const alba = require("./Kennedy_albaEwasteManager.js");
```

---

## Available Functions & Parameters

### 1. `findAvailableBins(itemType)`
Finds and returns an array of e-waste bins that accept the specified item type and still have remaining weight capacity (`currentKg < maxKg`).
* **Parameters:**
  * `itemType` *(String)*: The e-waste category (`"ICT"`, `"Batteries"`, or `"Bulbs"`).
* **Returns:** *(Array of Objects)* Matching available bin objects.

### 2. `calculatePoints(itemType, weightKg)`
Calculates the reward points earned based on the e-waste category and weight (`20` pts/kg for `"ICT"`, `15` pts/kg for `"Batteries"`, and `10` pts/kg for `"Bulbs"`).
* **Parameters:**
  * `itemType` *(String)*: The e-waste category (`"ICT"`, `"Batteries"`, or `"Bulbs"`).
  * `weightKg` *(Number)*: Weight of the recycled items in kilograms.
* **Returns:** *(Number)* Total reward points earned.

### 3. `logDropOff(userId, binId, itemType, weightKg)`
Validates the selected bin ID, item category, and remaining weight capacity. If valid, it updates the bin's current weight, awards calculated points to the user, and records the transaction in `recyclingLogs`.
* **Parameters:**
  * `userId` *(String)*: Unique identifier of the user (e.g., `"U101"`).
  * `binId` *(String)*: Unique identifier of the target bin (e.g., `"BIN-01"`).
  * `itemType` *(String)*: Category of e-waste being deposited (`"ICT"`, `"Batteries"`, or `"Bulbs"`).
  * `weightKg` *(Number)*: Weight of the drop-off in kilograms.
* **Returns:** *(String)* Confirmation message if successful, or an error message if the bin is invalid, wrong type, or full.

### 4. `redeemVoucher(userId, pointsNeeded)`
Checks whether the user has enough accumulated points and deducts the required amount to redeem a reward voucher.
* **Parameters:**
  * `userId` *(String)*: Unique identifier of the user (e.g., `"U101"`).
  * `pointsNeeded` *(Number)*: Number of points required for the voucher.
* **Returns:** *(String)* Confirmation message if successful, or an insufficient points message displaying the user's current balance.

### 5. `getFullBins()`
Checks all bins in the system and returns those that have reached at least **80%** of their maximum weight capacity (`currentKg / maxKg >= 0.8`).
* **Parameters:** None.
* **Returns:** *(Array of Objects)* List of bins nearing full capacity.

---

## Example Usage (`app.js`)

```javascript
const alba = require("./Kennedy_albaEwasteManager.js");

console.log(alba.description);

// 1. Find available bins for ICT e-waste
console.log(alba.findAvailableBins("ICT"));

// 2. Calculate points for 3kg of ICT items
console.log(alba.calculatePoints("ICT", 3));

// 3. Log a valid drop-off for user U101 at BIN-01
console.log(alba.logDropOff("U101", "BIN-01", "ICT", 3));

// 4. Attempt to redeem a voucher worth 80 points
console.log(alba.redeemVoucher("U101", 80));

// 5. Check which bins are >= 80% full
console.log(alba.getFullBins());
```

Run the script in your terminal using:
```bash
node app.js
```

---

# References
- **ALBA E-Waste Singapore:** https://alba-ewaste.sg/
- **GitHub Markdown Formatting Guide:** https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

---

# Declaration of AI Usage
Generative AI was used strictly within the permitted guidelines of Section (A) to brainstorm the ALBA E-Waste Singapore web application idea, design the mock data schemas (`eBins`, `recyclingLogs`, `userPoints`), and generate sample JSON mock data for testing.