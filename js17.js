function calculateTax() {
    let taxRate;
    let price = document.getElementById('num').value * 1;

    if (price > 10000) {
        taxRate = 0.25;
    } else if (price >= 5000 && price <= 10000) {
        taxRate = 0.20;
    } else {
        taxRate = 0.15;
    }

    let taxAmount = price * taxRate;
    document.getElementById("daniil").innerHTML = taxAmount.toFixed(2);
}