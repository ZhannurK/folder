function NewYear() {
    let today = new Date();
    let currentYear = today.getFullYear();
    
    let newYear = new Date(currentYear + 1, 0, 1);
    
    let timeDifferenceInSeconds = Math.floor((newYear - today) / 1000);
    
    let daysLeft = Math.ceil(timeDifferenceInSeconds / (60 * 60 * 24));
    
    document.getElementById("daniil").innerHTML = "It is " + daysLeft + " days left before the New Year."; 
}