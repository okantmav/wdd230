const button = document.querySelector('#windChillMath');

button.addEventListener('click', () => {

    const temperature = fahrenheit(parseFloat(document.querySelector("#temperature").value)).toFixed(0);
    //console.log(typeof temperature);
    //console.log(temperature);
    const windSpeed = mph(parseFloat(document.querySelector("#wind-speed").value)).toFixed(0);
    //console.log(typeof windSpeed);
    //console.log(windSpeed);
    windChillFactor(temperature, windSpeed);

});

function fahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function mph(kph) {
    return kph * 0.6214;
}

function windChillFactor(tF, wsMph) {
    if (tF <= 50 && wsMph > 3) {
        windChill = 35.74 + (0.6215 * tF) + 35.75 * Math.pow(wsMph, 0.16) + 0.4275 * tF * Math.pow(wsMph, 0.16);
        document.querySelector('#wind-chill').textContent = windChill.toFixed(2).toString();
    } else {
        document.querySelector('#wind-chill').textContent = "N/A";
    }
}