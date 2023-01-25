/*
============================================
; Title:  number-generator.js
; Author: Hannah Del Real
; Date:   25 January 2023
; Description: JavaScript to generate a random number from set parameters and compare a guess using control statements.
;===========================================
*/
document.getElementById("btnSubmit").onclick= function () {
    const rnd = Math.floor((Math.random() * 10) + 1);
    let myNumber = document.getElementById("txtMyNumber").value;
    if (myNumber > rnd) {
        document.getElementById("number-results").innerHTML = "The number is is less than " + myNumber;
        // If the guess is greater than the number, result says the correct answer is less than your answer.
    } else if (myNumber < rnd) {
        document.getElementById("number-results").innerHTML = "The number is is greater than " + myNumber;
        // If the guess is less than the number, result says the correct answer is greater than your answer.
    } else if (myNumber == rnd) {
            document.getElementById("number-results").innerHTML = "Congratulations! You picked the correct number!"
            // If the guess is correct, result will say congratulations!
    } else
    {document.getElementById("number-results").innerHTML = "Sorry, invalid number! Please enter a number between 1 and 10."
    }
    }