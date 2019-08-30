var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

function printAndGetHighScore(scores) {
    var bubblesTest;
    var highestScore = 0;
    for (var i = 0; i < scores.length; i++) {
        bubblesTest = "Bubble solution #" + i + " score: " + scores[i];
        console.log(bubblesTest);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
    return (highestScore)
}
var highestScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highestScore);

function getBestResult(scores, highestScore) {
    var numbershigh = [];
    for (var j = 0; j < scores.length; j++) {
        if (scores[j] == highestScore) {
            numbershigh.push(j);
        }
    }
    return (numbershigh)
}

var numbershigh = getBestResult(scores, highestScore);
console.log("Solution with highest score: " + numbershigh);

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .29, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

function getMostCosteEffectiveSolution(scores, costs, highestScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highestScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return (index);
}
var mostCostEffective = getMostCosteEffectiveSolution(scores, costs, highestScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");