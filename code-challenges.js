// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//this would be the Constant with the perameter 

//const boiling = (temp) =>{

    // Input:(numbers)
    //Output(strings)

   // This is where i would creat the condition for the function 
   //if the tempature is less than boiling point then the output will be "below boiling point"
   //if tempature is equal to boiling point output will be boiling point
   //if temp is more than boiling point output will be above boiling point 
// if(temp < 212){
//     return `${temp} Below boiling point `

// }else if(temp === 212){
//     return `${temp} at boiling point`
// }else if(temp > 212){
//     return `${temp} is over boiling point`
// }


// }

// console.log(boiling(temp1))
// console.log(boiling(temp2))
// console.log(boiling(temp3))
// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

//var myNumbers1 = [3, 7, 0, 6, -9]

// this will be where i put my constant and my perameter 
 //const multi = (number1)
 //this is where the loop would go to make all the numbers multiplied by 5
 //input:numbers 
 //output:numbers mulplied by 5

//  let multi2 = []

// for(let i=0; i<array.length; i++){
//     multi2.push(array[i] * 5)
//     }
//     return multi2
// }
// console.log(multi(myNumbers1))

// looked through the notes to try and fix it. i kept getting a syntaxerror and for an unexpected toke `}` could not figure out why it didnt work



// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]

//input numbers 
//output numbers 
// this is where i make my constant declaration 
const oddNumbers = (numbers) => {
    let num =[]
     //this is where my loop will be to make the numbers odd using module to get the odds numbers
    for(let i=0; i<numbers.lenght; i++){
        if(number[i] % 2 ! =0){
            num.push(array[i])
        }
    }
    return num
}
console.log(oddNum(myNumbers2))

//kept getting syntax error for the bang character couldn't figure out how to make it work

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
const noVowels =(vowel) = >{
if(1=e)
else(e=0)
}

// Tried to work on it with Diego we looked through stack overflow, and  compared our notes we couldnt figure out how to make the function work. I believe that we have to creat a loop with conditionals and and the shift funtion but i'm not sure.


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"
