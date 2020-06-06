// these variables hold the location of each cell of the ship
var location1 = 3
var location2 = 4
var location3 = 5
// this variable hold the users current guess. this variable won't have a value until the user makes a guess
var guess
// this variable holds the number of hits
var hits = 0
// this variable holds the number of guesses
var guesses = 0
// this variable keeps track of whether the ship is sunk or not
var isSunk = false

// Loop: while the ship is not sunk
while (isSunk === false) {

    // get the users guess
    guess = prompt("Ready, aim, fire! (Enter a number from 0-6):")
    // compare the users input to valid input values
    // if the users guess is invalid
    if (guess < 0 || guess > 6) {
        // tell the user to enter a valid number
        alert("Please enter a valid cell number")

    // else
    // add one to the guesses
    } else {
        guesses = guesses + 1
    }
        // if the users guess matches the location
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!")
            // add one to the number of hits
            hits = hits + 1
            // if the number of hits is 3 
            if (hits == 3) {
                // set isSunk to true
                isSunk = true
                // tell user "You sank my battleship"
                alert("You sank my battleship!!!")

            }
        } else {
            alert("MISS")
        } 
}
// tell user stats
var stats = "You took " + guesses + "guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses)

alert(stats)