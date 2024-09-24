'use strict';

let nme = prompt('Who goes there?  Please tell me your name');
console.log('The user said their name is ' + nme);
if (nme === 'Badger') {
    alert('Awwww! Hey, baby!!! New questions have been added at the end!  I love you!')
}
else {
    alert('Hello there ' + nme + '!  I heard you came here to test your knowledge of owls!  So let us play a guessing game!  Please answer each of the following questions with either "yes" or "no"');
}

let counter = 0;

//I refactored the later instances to the more efficient method shown in lecture of changing a variable to lowercase, but I wanted to leave this one as an example of the first way to do it. This one is the way that the internet had shown me to do it. 
let age = prompt('Do you think I am over the age of 40?');
console.log('When asked whether they thought I was older than 40, the user answered with ' + age)
let age2 = age.toLowerCase();
if (age2 === 'yes') {
    alert('Yes, you are right, ' + nme + '! I am older than 40!');
    counter += 1;
}
else if (age2 === 'no') {
    alert('I am sorry to say that you are wrong. I am, in fact, older than 40.');
}
else {
    alert('That is not a valid response.  Please reply to these questions with only either the word "yes" or the word "no"!');
}

//Refactoring the code to the more efficient method starts here.
let remote = prompt('Do you think I have ever worked remotely for a job?');
console.log('When asked if I have ever worked remotely, the user answered with ' + remote);
remote = remote.toLowerCase();
if (remote === 'no') {
    alert('You are right! I have never worked a remote job!  All my life my jobs have involved daily in-person tasks.');
    counter += 1;
}
else if (remote === 'yes') {
    alert('No.  I actually have never worked a remote job before.');
}
else {
    alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!')
}

let owlNecks = prompt('True or False:  To look at something that is circling around behind them without moving their bodies, owls can turn their heads 360 degrees around on their necks?')
owlNecks = owlNecks.toLowerCase();
if (owlNecks === 'false'){
    alert('You are correct! The most that an owl can comfortably turn its head is about 270 degrees.');
    counter += 1;
}
else if (owlNecks === 'true') {
    alert("FALSE!  The typical bird has a 180 degree range of movement.  Some owls have 270 degrees of motion, but none have more than that!  Owls are unable to move their eyes much within the socket, and are therefore dependent on turning their entire head in order to see in different directions.  Luckily for them, birds have two to three times as many neck vertebrae as humans (swans have 24, but even tiny hummingbirds have 14, whereas humans only have 7).  Additionally, in owls the holes inside those neck vertebrae are about 10 times wider than the arteries passing thru them.")
}
else {
    alert('That is not a valid response. Please reply with either TRUE or FALSE')
}


let international = prompt('A few people in this 201 class have lived outside of the United States. Am I one of them?')
console.log('When asked to guess whether I have lived outside of the U.S., the user answered with ' + international);
international = international.toLowerCase();
if (international === 'yes') {
    alert('You are right! I have lived many different places in my life. While most of those locations were in the U.S., I DID also spend several years living in the Canal Zone, in the Republic of Panama');
    counter += 1;
}
else if (international === 'no') {
    alert('You guessed incorrectly. I have lived in the Canal Zone of the Republic of Panama.  I also have lived in several states around the U.S.');
}
else {
    alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!')
}


let countries = ["New Zealand" , "England" , "Iceland" , "Italy"];
let maxTries = 4;

for (let attempt = 1; attempt <= maxTries; attempt++){
    let travel = prompt('In addition to the Americas, guess a country I have visited (I mean outside of an airport). You will have up to 4 tries to guess one right');

    if (countries.includes(travel)) {
        alert("Congratulations! You guessed one of them correctly!");
        counter += 1;
        break;
    }
    else {
        alert("Keep guessing!");
    }
}

alert('In addition to the Americas (Canada, Mexico, & Panama), I have also visited: ' + countries);


let skydive = prompt('Have I ever jumped out of a perfectly good airplane in order to plummet thru the sky?');
console.log('When asked to guess whether I have ever gone skydiving before, the user answered with ' + skydive);
skydive = skydive.toLowerCase();
if (skydive === 'yes') {
    alert('Yes!  You are correct that I have gone skydiving! More than once!');
    counter += 1;
}
else if (skydive === 'no') {
    alert('You guessed incorrectly, ' + nme + '. I actually HAVE! I have been skydiving more than once.');
}
else {
    alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!');
}


let military = prompt('Was I ever in the military?');
console.log('Concerning whether or not I have ever served in the military, the user answered with ' + military);
military = military.toLowerCase();
if (military === 'no') {
    alert('You are correct, ' + nme + '. Although my early childhood involved a lot of time on U.S. military bases and a couple of my family members have worked as civilian contractors, I have never personally had any affiliation nor involvement in military service.');
    counter += 1;
}
else if (military === 'yes') {
    alert('Okay, I have to admit that that one was a bit of a trick question. I grew up spending a lot of my early childhood on U.S. military bases, and a couple of my family members have worked as civilian contractors, but I have not personally had any affiliation nor involvement in military service.  So you got the question wrong, but you still have two more chances to improve your score!');
}
else {
    alert('That is not a valid response, ' + nme + '.  You were supposed to reply with either the word "yes" or the word "no"! Since yes/no questions appear to not be your thing, how about we move on to a differnt type of question that might be more fun for you?');
}


let maximum = 4;
while (maximum > 0) {
    let numberGuess = prompt('Guess a number between 1 and 10');
    numberGuess = parseInt(numberGuess);
    maximum -= 1;

    if (numberGuess === 9) {
        alert('Great job! You guessed right!  The correct number was 9!');
        counter += 1;
        break;
    }
    else if (numberGuess < 9 && maximum === 0) {
        alert('The correct answer was 9');
    }
    else if (numberGuess > 9 && maximum === 0) {
        alert('The correct answer was 9');
    } 
    else if (numberGuess > 9) {
        alert('You aimed too high! Try guessing a lower number');
    } 
    else {
        alert('Too low! Try guessing higher');
    }
}

let swords = ["rapier" , "sidesword" , "cutlass" , "recurve bow" , "thrown weapons"];
let maxAttempts = 6;

for (let attempt = 1; attempt <= maxAttempts; attempt++){
    let guess = prompt('HEMA is a hobby of mine. Guess a weapon I have received at least a small amount of training in the use of.');

    if (swords.includes(guess)) {
        alert("Congratulations! You guessed one of them correctly!");
        counter += 1;
        break;
    }
    else {
        alert("Keep guessing!");
    }
}

alert('The correct possible answers were: ' + swords);

alert('That was the last question. Thank you for playing, ' + nme + '!  The number of questions you got correct today was ' + counter + ' out of 9!  Continue onward!  The portal to learn more about owls is now open!');
