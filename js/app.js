'use strict';

/* let userName = 'nazmia';

let age = prompt('what is your age?');
console.log('before ' + typeof age);//here we put + and it works
//here if we enter a text 

age = parseInt(age); /***** WAY 1 */
//here will return a Nan 
//Nan means: not a number
//age = Number(); /****** WAY 2 */
//console.log('after ', typeof age);//here we put , and it works also


/*************************** Confirm box */
/*let feeling = confirm('what is your feeling');

if (feeling) {
    console.log('great');
} else {
    console.log('hope you feel well');
}*/


let userName = prompt('what is your name?');
alert('hello ' + userName);

let counter = 0;

// Q1
let myAge = prompt('is my age > 25?');
myAge = myAge.toLowerCase();

if (myAge === 'n' || myAge === 'no') {
    alert('great gessing');
    //console.log('my age is lower than ' + myAge);

    counter += 1;
} else if (myAge === 'y' || myAge === 'yes') {
    alert('oh no! I am 23');
} else {
    alert('please answer with only yes/y or no/n with no spaces');
}

//Q2
let homeLocation = prompt('do I live in zarqa?');
homeLocation = homeLocation.toLowerCase();
if (homeLocation === 'y' || homeLocation === 'yes') {
    //console.log('great, I live in zarqa');
    alert('great gessing');
    counter++;
} else if (homeLocation === 'n' || homeLocation === 'no') {
    alert('oh no');
} else {
    alert('please answer with only yes/y or no/n with no spaces');
}

//Q3
let turkey = prompt('do I love turkey?');
turkey = turkey.toLowerCase();
if (turkey === 'y' || turkey === 'yes') {
    //console.log('great, I really love turkey');
    alert('great gessing');
    counter++;
} else if (turkey === 'n' || turkey === 'no') {
    alert('oh no');
} else {
    alert('please answer with only yes/y or no/n with no spaces');
}


//Q4
let galaxy = prompt('do I love choclate?');
galaxy = galaxy.toLowerCase();
if (galaxy === 'y' || galaxy === 'yes') {
    //console.log('great, I really love galaxy choclate');
    alert('great gessing');
    counter++;
} else if (galaxy === 'n' || galaxy === 'no') {
    alert('oh no');
} else {
    alert('please answer with only yes/y or no/n with no spaces');
}


//Q5
let design = prompt('do I love designing?');
design = design.toLowerCase();
if (design === 'y' || design === 'yes') {
    //console.log('great, actully I am a Humble designer');
    alert('great gessing');
    counter++;
} else if (design === 'n' || design === 'no') {
    alert('oh no');
} else {
    alert('please answer with only yes/y or no/n with no spaces');
}

if (counter > 2) {
    alert('very good ' + userName + ' your score is ' + counter + ' of 5');
} else {
    alert('actully you dont know me :) ' + userName + ' your score is ' + counter + ' of 5');
}