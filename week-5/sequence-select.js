/*
============================================
; Title:  number-generator.js
; Author: Hannah Del Real
; Date:   25 January 2023
; Description: JavaScript to generate a random number from set parameters and compare a guess using control statements.
;===========================================
*/
document.getElementById("btnDisplaySequence").onclick= function () {
    let choice = document.getElementById("sequence").value;
    if (choice === "fibonacci") {
        let fibonacciSequenceText = "";
        let num1 = 0, num2 = 1, next;
        while (num1 < 40) {
            fibonacciSequenceText += num1 + "," ;
            next = num1 + num2;
            num1 = num2;
            num2 = next;
        }
     document.getElementById("sequence-results").innerHTML = fibonacciSequenceText.slice(0,-1)
    } else if (choice === "even") {
        let even = "";
        let i = 0
        do { 
            i += 2;
            even += i + "," ;
        } while (i < 20);
        
        document.getElementById("sequence-results").innerHTML = even.slice(0,-4);
    } else if (choice === "odd") {
        let odd = "";
        for (let x = 1; x < 20; x += 2) {
            odd += x + ",";
        }
     document.getElementById("sequence-results").innerHTML = odd.slice(0,-1);
    } else if (choice === "select") {
        alert ("Invalid selection, please try again!");
    } else {   
        document.getElementById("sequence-results").innerHTML = "Please select a sequence type!";
    } 
}