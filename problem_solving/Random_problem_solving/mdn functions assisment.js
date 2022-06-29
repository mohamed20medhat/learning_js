
const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
];
const para = document.createElement("p");




// return a random name from an array of names. with lower and upper bounds
function randomNum(min, max) {
    let num = Math.floor(Math.random() * max);
    while (num < min) {
        num = Math.floor(Math.random() * max);
    }
    return num;
}

function chooseName() {
    let randomName = names[randomNum(7, names.length)];
    para.textContent = randomName;
}

// Don't edit the code below here!
section.innerHTML = " ";
chooseName();
section.appendChild(para);
    





// function 4 => using arrow function to return array elements under a condition
let isShort = (name) => name.length < 5;
const shortNames = names.filter(isShort);
para.textContent = shortNames;

// Don't edit the code below here!
section.innerHTML = " ";
section.appendChild(para);



// function 2 => draw a canvas with a blue rectangle
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here
ctx.rect(x, y, width, height);
ctx.fillStyle = color;
ctx.fill();
    

