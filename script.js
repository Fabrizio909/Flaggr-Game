

let currentCountry = "";

const flags = [
{country: "afghanistan", file: "afghanistan.png"},
{country: "albania", file: "albania.webp"},
{country: "algeria", file: "algeria.webp"},
{country: "samoa americana", file: "samoaamericana.webp"},
{country: "andorra", file: "andorra.webp"},
{country: "angola", file: "angola.webp"},
{country: "argentina", file: "argentina.webp"},
{country: "aruba", file: "aruba.webp"},
];


function NewFlag() {
let input = document.getElementById("input");
let youranswer = document.getElementById("youranswer");
let correctanswer = document.getElementById("correctanswer");
let flagImage = document.getElementById("flag");

const randomIndex = Math.floor(Math.random() * flags.length)
const selected = flags[randomIndex];
currentCountry = selected.country;

flagImage.src = "img/" + selected.file;

youranswer.textContent = "Your Answer: ";
correctanswer.textContent = "Correct Answer: ";
input.value = "";
}


function checkAnswer() {
let input = document.getElementById("input").value.toLowerCase();
let youranswer = document.getElementById("youranswer");
let correctanswer = document.getElementById("correctanswer");
let score = document.getElementById("score");
let record = document.getElementById("record");
  
youranswer.textContent = "Your Answer: " + input;
correctanswer.textContent = "Correct Answer: " + currentCountry;

if (input === currentCountry) {
score += 1;
score.textContent = "Score: " + score;
} else {
score = 0;
score.textContent = "Score: " + score;
NewFlag();
}
  
}
