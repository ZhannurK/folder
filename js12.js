function CheckNum(){
    event.preventDefault();

    let num = document.getElementById("num").value * 1;

    if (num % 2 == 0) {
        return document.getElementById('daniil').innerHTML = "The Number is even"
    }
    else if (num % 2 != 0) {
        return document.getElementById('daniil').innerHTML = "The Number is odd"
    }
}