var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

var bubblesTest;
var highestScore = 0;
var mostBiggest = [];
var k;
var numbershigh = [];

for (var i = 0; i < scores.length; i++) {
    bubblesTest = "Bubble solution #" + i + " score: " + scores[i];
    if (scores[i] > highestScore) {
        highestScore = scores[i];
        mostBiggest = scores[i];
    }
    console.log(bubblesTest);
}

for (var j = 0; j < scores.length; j++) {
    if (scores[j] == highestScore) {
        // numbershigh.push(j);
    }
}
numbershigh = numbershigh + j;

console.log("bubbles tests: " + i)
console.log("Highest bubble score: " + highestScore);
console.log("Solution with highest score: " + numbershigh);