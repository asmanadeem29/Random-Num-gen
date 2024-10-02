const btn = document.getElementById("gen-btn"); // Corrected button ID
const output = document.getElementById("output");
let randomNum;
const min = 1;
const max = 100;

btn.onclick = function() {
    randomNum = Math.floor(Math.random() * (max - min + 1) + min); // +1 to include max
    output.textContent = randomNum;
}
