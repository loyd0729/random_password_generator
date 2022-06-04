let randomCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">",
    "?", ":", "{", "}", "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C",
    "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z"]

let outPutter = document.getElementById("output");
let outPutter2 = document.getElementById("output2");
let outPutter3 = document.getElementById("output3");
let outPutter4 = document.getElementById("output4");

function myClick() {
    let char1 = [];
    for(let i = 0; i < 12; i++) {
        char1.push(randomCharacters[Math.floor(Math.random() * randomCharacters.length)]);
    }
    return char1.join("");
} 

function outPuting() {
    outPutter.innerHTML = myClick();
    outPutter2.innerHTML = myClick();
    outPutter3.innerHTML = myClick();
    outPutter4.innerHTML = myClick();
}

    

