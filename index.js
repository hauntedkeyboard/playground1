const myButton = document.getElementById('myButton');
const label1 = document.getElementById('myLabel1');
const label2 = document.getElementById('myLabel2');
const label3 = document.getElementById('myLabel3');
const min = 2;
const max = 10;
let randomNum1;
let randomNum2;
let randomNum3;
const charLabel = document.getElementById('myCharLabel');


myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max+1-min) + min);
    randomNum2 = Math.floor(Math.random() * (max+1-min) + min);
    randomNum3 = Math.floor(Math.random() * (max+1-min) + min);


    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
};

let myString = "All work and no play makes Jack a dull boy.    ";
// charLabel.innerText = myString.replaceAll('dull boy', 'promising young man').padEnd(180, "All work and all play baby. ...").repeat(75);
// console.log(myString.replaceAll("dull boy", "sick fuck"));

let name = myString.trim().slice(27, 32);
let lastChar = myString.trim().slice(0);
let firstWord = myString.trim().slice(0, myString.indexOf(" "));
let lastWord = myString.slice(myString.trim().lastIndexOf(" "));
charLabel.innerText = lastWord;

