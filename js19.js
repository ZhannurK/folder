function fibonacci() {
    let n = document.getElementById('fibonacciInput').value * 1;

    let a = 0; 
    let b = 1; 
    let temp;

    if (n <= 1) {
        document.getElementById('daniil').innerHTML = n;
        return;
    }
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    document.getElementById('daniil').innerHTML = b;
}