function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertTemperature() {
    let tempCelsius = document.getElementById('celsius').value * 1;
    let convertedToFahrenheit = celsiusToFahrenheit(tempCelsius);

    document.getElementById('result').innerHTML = tempCelsius + "°C is " + convertedToFahrenheit.toFixed(2) + "°F";
}