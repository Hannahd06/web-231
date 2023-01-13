/*
============================================
; Title:  payrate.js
; Author: Hannah Del Real
; Date:   12 January 2023
; Description: JavaScript for the payrates for three employees, using fixed decimal 
;===========================================
*/

let txtPayRateLudwig = 18.89.toFixed(1);
let txtPayRateJohann = 25.54.toFixed(1);
let txtPayRateWolfgang = 50.13.toFixed(1);

/*bind variable with fixed decimal to html */

document.getElementById("txtPayRateLudwig").innerHTML = txtPayRateLudwig;
document.getElementById("txtPayRateJohann").innerHTML = txtPayRateJohann;
document.getElementById("txtPayRateWolfgang").innerHTML = txtPayRateWolfgang;
