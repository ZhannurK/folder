function countLetters(event) {

    let input = document.getElementById("num").value;

    let vowels = 'aeoiu';
    let consonants = 'bdfghjklmnpqrstvwxyz';

    let countVowels = 0;
    let countConsonants = 0; 

    for (let char of input) {
        if (vowels.match(char.toLowerCase())){
            countVowels++;
        }
    }
    for (let char of input) {
        if (consonants.match(char.toLowerCase())){
            countConsonants++;
        }
    }

    document.getElementById("daniil").innerHTML = "The number of vowels: " + countVowels + " | " + "The number of consonants: " + countConsonants;
}