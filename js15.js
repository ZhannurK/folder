function factorial(event){
    event.preventDefault();
    
    let num = document.getElementById('num').value * 1;
    let result = 1;

    if (num < 0) {
        document.getElementById('daniil').innerHTML = "Factorial do not accept negative numbers";
    }
    else if (num == 1 || num == 0) { 
        document.getElementById('daniil').innerHTML = 1;
    } 
    else {
        for (let i = 2; i <= num; i++) {
            result *= i; 
        }
    document.getElementById('daniil').innerHTML = result;
    }
}