let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let alpha = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f", "g"],
  ["h", "i"]
];

let allData = [nums, alpha];

console.log(allData);

// Print all nums from allData
console.log(allData[0]);

// Print 2
console.log(allData[0][0][1])

// Print f
console.log(allData[1][2][1]);

// Print ["c", "d"]
console.log(allData[1][1]);

// Add letter y with bracket notation after d
allData[1][1][2] = "y";
console.log(allData);

// Add letter z with .push() after y
allData[1][1].push("z");
console.log(allData);
