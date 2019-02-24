function windChill(){
    var tempF = parseInt(document.getElementById('temperature').innerHTML);
    var speed = parseInt(document.getElementById('speed').innerHTML);
    var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed,0.16) + 0.4275 * tempF * Math.pow(speed,0.16);
    document.getElementById("windChill").innerHTML = windChillFactor.toFixed(2);
}