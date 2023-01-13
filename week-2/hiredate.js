/*
============================================
; Title:  hiredate.js
; Author: Hannah Del Real
; Date:   12 January 2023
; Description: JavaScript for three employees hire dates
;===========================================
*/

let txtHireDateLudwig = new Date ().toLocaleDateString('en-US');
let txtHireDateJohann = new Date ().toLocaleDateString('en-US');
let txtHireDateWolfgang = new Date ().toLocaleDateString('en-US');
 
/*bind constant to html */
document.getElementById("txtHireDateJohann").innerHTML = txtHireDateJohann;
document.getElementById("txtHireDateLudwig").innerHTML = txtHireDateLudwig;
document.getElementById("txtHireDateWolfgang").innerHTML = txtHireDateWolfgang;