/*
============================================
; Title:  classes.js
; Author: Hannah Del Real
; Date:   22 February 2023
; Description: JavaScript for delreal-alphabet-game.html, demonstrating use of arrays.
;===========================================
*/
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(alphabet);
let alphabetOutput = "";
for (let entireAlphabet in alphabet) {
    console.log(entireAlphabet);
    alphabetOutput += alphabet[entireAlphabet] + "," + " ";
}
document.getElementById("entire-alphabet").innerHTML = alphabetOutput.slice(0,-2)

document.getElementById("btnFindLetter").onclick= function () {
    let pos = document.getElementById("txtPosition").value;
  //subtract 1 from user's input to get true index value because an array index starts at 0 not 1.
    let letter = alphabet[pos - 1] //Compares user's corrected input value to the array of letters in alphabet.
    if (letter == undefined){
        document.getElementById("letter-results").innerHTML = "There are not " + pos + " letters in the alphabet";
     } else {
        document.getElementById("letter-results").innerHTML = letter + " is at position " + pos + " in the alphabet.";
     }
}