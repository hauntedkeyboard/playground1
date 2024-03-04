
/* A GAME WHERE COMPUTER TRIES TO GUESS A NUMBER    
STEP 1. YOU COME UP WITH A NUMBER FROM 1 - 100 AND TYPE IT INTO A FIELD
    make a const to store it
    after you click on 'Sumbit'
STEP 2. COMPUTER MAKES AN INITIAL GUESS AND WAITS FOR YOUR REPLY
    a variable - computer outputs random number within the current parameters into a field
    YOU ARE PRESENTED WITH THREE BUTTONS TO CHOOSE 
STEP 3.A. YOU CONFIRM THE CORRECT GUESS 
    congratulates itself
    asks you if you want to make a guess again
STEP 3.B. YOU SAY THAT THE NUMBER IS BIGGER
    COMPUTER UPDATES PARAMETERS, 
    MAKES ANOTHER GUESS AND RETURNS TO THE END OF 2.
STEP 3.C. YOU SAY THAT THE NUMBER IS SMALLER 
    COMPUTER UPDATES PARAMETERS, 
    MAKES ANOTHER GUESS AND RETURNS TO THE END OF 2.*/


// const textField = document.getElementById("myLabel1");
// const btnTooHigh = document.getElementById("btnTooHigh");
// const btnTooLow = document.getElementById("btnTooLow");
// const btnWon = document.getElementById("btnWon");
// const mySumbit = document.getElementById("mySubmit");
// let guessed = false;
// let currentMin = 1;
// let currentMax = 100;


// function getRandomNumberMinMax(){
//     return Math.floor(Math.random() * (currentMax-currentMin) + currentMin + 1);
// };

// console.log(currentMin);
// console.log(currentMax);
// console.log(getRandomNumberMinMax());
// mySumbit.onclick = function() {
//     let currentGuess;
//     while (guessed === false) {
//         currentGuess = getRandomNumberMinMax();
//         console.log(currentGuess);
//         if (btnTooLow.clicked == true) {
//             currentMin+= currentGuess;            
//         }
//         else if (btnTooHigh.clicked == true) {
//          currentMax-= currentGuess;   
//         }
//         else if (btnWon.clicked == true) {
//             guessed = true;
//             window.alert("YOU WON!")
//         }};
        
// };






// const myButton = document.getElementById('myButton');
// const label1 = document.getElementById('myLabel1');
// const label2 = document.getElementById('myLabel2');
// const label3 = document.getElementById('myLabel3');
// const min = 2;
// const max = 10;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// const charLabel = document.getElementById('myCharLabel');


// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * (max+1-min) + min);
//     randomNum2 = Math.floor(Math.random() * (max+1-min) + min);
//     randomNum3 = Math.floor(Math.random() * (max+1-min) + min);


//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// };

// let myString = "All work and no play makes Jack a dull boy.    ";
// // charLabel.innerText = myString.replaceAll('dull boy', 'promising young man').padEnd(180, "All work and all play baby. ...").repeat(75);
// // console.log(myString.replaceAll("dull boy", "sick fuck"));

// let name = myString.trim().slice(27, 32);
// let lastChar = myString.trim().slice(0);
// let firstWord = myString.trim().slice(0, myString.indexOf(" "));
// let lastWord = myString.slice(myString.trim().lastIndexOf(" "));
// charLabel.innerText = lastWord;

function summ(...numbers){
    let total = 0;
    for (let number of numbers){
        total += number;
    };
    console.log(total);
    console.log(numbers);
    console.log(...numbers);
    return total;
};

sum = summ(1,2,3,4,5);