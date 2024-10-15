function compareNums() {
    event.preventDefault();

    let a = document.getElementById("a").value * 1;
    let b = document.getElementById("b").value * 1;
    let c = document.getElementById("c").value * 1;
    let largest = a;
    let smallest = a; 
    
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }

    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }

    document.getElementById('daniil').innerHTML = "Largest number: " + largest + " | " + "Smallest number: " + smallest;
}