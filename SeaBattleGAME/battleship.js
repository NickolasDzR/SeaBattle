var view = { // object which add message and classes if cells are hits or miss
    displayMessage: function (msg) { // this add message
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) { // this add class hit
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) { // this add class miss
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },
}

var model = {
    boardSize: 7, // size of board
    numShips: 3, // amount of ships on board
    shipLength: 3, // length of ships
    shipSunk: 0, // how many ships ware sank
    ships: [{
            locations: ["06", "16", "26"], // position of first ship
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"], // position of second ship
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"], // position of third ship
            hits: ["", "", ""]
        }
    ],
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) { // create a counter of ships massive based on number of numShips
            var ship = this.ships[i]; // check out of ships massive by counter
            var index = ship.locations.indexOf(guess); // when gamer gave us number of cell this function check out whether of this cell number
            if (index >= 0) { // if index of this ship[i] give us back -1 that's mean that ship on this position doesn't exist. if index give us back number bigger that 0, that's mean HIT
                ship.hits[index] = "hit"; // if .indexOf game us back bigger than 0, we write hit in massive HITS
                view.displayHit(guess); // call function view method displayHit and add class hit to this cell
                view.displayMessage("HIT!") // and call function view again in order to add message HIT
                if (this.isSunk(ship)) { // if ship is sank, then increase our property "shipSunk" on 1 and add message You sank my battleship
                    view.displayMessage("You sank my battleship");
                    this.shipSunk++
                }
                return true;
            }
        }
        view.displayMiss(guess); // if no one of this conditions have not been met, then we add message "You missed"
        view.displayMessage("You missed.")
        return false;
    },
    isSunk: function (ship) { // this method check out if at least one cell in which gamer hadn't been hit yet, then return back false
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++
            var hit = model.fire(location)
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesess");
            }
        }
    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("OOps, that's off the board!")
        } else {
            return row + column;
        }
    }
    return null;
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton")
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

window.onload = init;