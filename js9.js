function isLeapYear(year) {
    if (( year % 4 == 0 && year % 100 !== 0) || year % 400 == 0 ) {
        return true;
    }
    else {
        return false; 
    }
} 

let year = window.prompt("Enter the year");

if (year) {
    if (isLeapYear(year)) {
        console.log(year + " is a leap year");
        document.getElementById("daniil").textContent = year + " is a leap year.";
    } else {
        console.log(year + " is not a leap year");
        document.getElementById("daniil").textContent = year + " is not a leap year.";
    }
}