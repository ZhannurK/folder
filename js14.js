function calculateArea(event) {
    event.preventDefault();

    let a = document.getElementById("a").value * 1;
    let b = document.getElementById("b").value * 1;
    let c = document.getElementById("c").value * 1;
    
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
    let result = area;

    document.getElementById('daniil').innerHTML = "The Area of The Triangle Equals to: " + result;
}