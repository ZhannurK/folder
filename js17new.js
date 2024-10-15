function convert() {
    let totalSeconds = document.getElementById("sec").value * 1;
    
    let hours = Math.floor(totalSeconds / 3600);
    
    let remainingSeconds = totalSeconds % 3600;
    
    let minutes = (remainingSeconds / 60);
    
    document.getElementById("daniil").innerHTML = "Hours: " + hours + " Minutes: " + minutes;
}