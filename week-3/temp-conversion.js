/*
============================================
; Title:  temp-conversion.js
; Author: Hannah Del Real
; Date:   17 January 2023
; Description: JavaScript for temperature conversion for delreal-temp-conversion.html using onclick events and reading values from html input fields.
;===========================================
*/
//This is the onclick event for the temperature conversion html.
document.getElementById("btnConvertTemp").onclick= function () {
    let Fahrenheit = document.getElementById("txtFahrenheit").value;

    // This is the JavaScript for the arithmetic for converting a value in Fahrenheit to Celsius.
    let Celsius = ((parseFloat(Fahrenheit) - 32)/1.8).toFixed(2);
    document.getElementById("temp-results").innerHTML = Celsius;
    }