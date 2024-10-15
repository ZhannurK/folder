function compareNumbers(a, b) {
    return a - b; 
}

let count = 1;
let max = 0;
let element;

function countFrequncy(){
    let arr = document.getElementById('numberArray').value.split(' ').map(Number);
    arr.sort(compareNumbers);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > max) {
            max = count;
            element = arr[i];
        }
    }
    
    document.getElementById('daniil').innerHTML = element;
}