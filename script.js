// create one variable called `word`
// Write code that will console log whether the word is a palindrome.
// Palindrome definition below:
// a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let word = prompt("Enter your Palindrome")
let wordLowerCase = word.toLowerCase(); //converting to lowercase so it will be the same characters backwards
let wordWithoutSpaces = wordLowerCase.replace(/\s/g, ''); //A reg expression that removes the spaces 
let reversedWord; //initializing for later

function reverseString(string){
    let splitString = string.split(""); //split the imput string into array
    let reverseArray = splitString.reverse(); //reverse the input array
    let joinArray = reverseArray.join(""); //put it ll back together
    return joinArray;
}
reversedWord = reverseString(wordWithoutSpaces);

//output
if (wordWithoutSpaces === reversedWord) {
    console.log(`${word} is a palindrome!`);
} else {
    console.log(`${word} is NOT a palindrome.`);
}