function calculate(event, operation) {
    event.preventDefault();

    let num1 = document.getElementById("num1").value * 1;
    let num2 = document.getElementById("num2").value * 1;
    let output;

    if (operation === 'multiply') {
        output = num1 * num2;
    } 
    else if (operation === "divide") {
        if (num2 === 0) {
            output = "Division by zero is not allowed.";
        } 
        else {
            output = num1 / num2;
        }
    } 
    else {
        output = "Invalid operation.";
    }
    
    document.getElementById("daniil").innerHTML = "The Output of Calculation is: " + output;
}