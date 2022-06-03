/*
    CIT 281 Project 2
    Name: Wyatt Holland
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//returns a single, random, lowercase letter from the alphabet
const getRandomLetter = function () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)];
}
console.log(getRandomLetter());

//returns a random string
const getRandomString = function (minLength, maxLength){
    let result = "";
    let lengthOfOutputString = getRandomInteger(minLength, maxLength + 1);
    for(let i = 0; i < lengthOfOutputString; i++) {
        result += getRandomLetter();
    }
    return result;
    
}

console.log(getRandomString(10,20));

//input a random string and returns alphabetically sorted string
const getSortedString = function (string) { 
    return string.split('').sort().toString();
}

console.log(getSortedString("zjhdvhbsjhbd").replaceAll(',',''));
