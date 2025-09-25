const generateBtn = document.getElementById("generate-btn")
const outputEl1 = document.getElementById("output-el1")
const outputEl2 = document.getElementById("output-el2")
const button = document.getElementById("mode");
const main = document.getElementById("main-el");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
let  inputEl = document.getElementById("length-int");



let characters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let mode = "dark";

moon.style.display = "none";

button.addEventListener("click", () => {
    main.classList.toggle("light");
    if (mode === "dark") {
    sun.style.display = "none";
    moon.style.display = "inline"
    mode = "light"
    }
    else if (mode === "light") {
        sun.style.display = "inline";
        moon.style.display = "none";
        mode = "dark"
    }
})


generateBtn.onclick = () => {
    let length
    if (inputEl.value != 0) {
        length = inputEl.value
    } else {
        length = 15;
    }

    let randomNum1 = "";
    let randomNum2 = ""; 

    for (let i = 0 ; i < length; i++) {
        randomNum1 += password[Math.floor(Math.random() * password.length)]
        randomNum2 += password[Math.floor(Math.random() * password.length)]
    }
    outputEl1.innerText = randomNum1;
    outputEl2.innerText = randomNum2;
}

