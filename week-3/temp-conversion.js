document.getElementById("btnConvertTemp").onclick= function () {
    let Fahrenheit = document.getElementById("txtFahrenheit").value;
    
    // This is the JavaScript for the arithmetic for converting a value in Fahrenheit to Celsius.
    let Celsius = ((parseFloat(Fahrenheit) - 32)/1.8).toFixed(2);
    document.getElementById("temp-results").innerHTML = Celsius;
    }