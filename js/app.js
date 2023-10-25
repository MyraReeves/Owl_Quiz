'use strict';

let nme = prompt('Who goes there?  Please tell me your name');
console.log('The user said their name is ' + nme);
if (nme == 'Badger') {
alert('Awwww! Hey, baby!!! New questions have been added! Answer with either "yes" or "no" for the next few until you get to those new ones. I love you!')
}
else {
alert('Hello there ' + nme + '!  I heard you came here to learn more about me.  So let us play a guessing game!  Please answer each of the following questions with either "yes" or "no"');
}


//I refactored the later instances to the more efficient method shown in lecture of changing a variable to lowercase, but I wanted to leave this one as an example of the first way to do it. This one is the way that the internet had shown me to do it. 
let age = prompt('Do you think I am over the age of 40?');
console.log('When asked whether they thought I was older than 40, the user answered with ' + age)
let age2 = age.toLowerCase();
if (age2 == 'yes') {
alert('Yes, you are right, ' + nme + '! I am older than 40!');
}
else if (age2 == 'no') {
alert('I am sorry to say that you are wrong. I am, in fact, older than 40.');
}
else {
alert('That is not a valid response.  Please reply to these questions with only either the word "yes" or the word "no"!');
}

//Refactoring the code to the more efficient method starts here.
let remote = prompt('Do you think I have ever worked remotely for a job?');
console.log('When asked if I have ever worked remotely, the user answered with ' + remote);
remote = remote.toLowerCase();
if (remote == 'no') {
    alert('You are right! I have never worked a remote job!  All my life my jobs have involved daily in-person tasks.');
}
else if (remote == 'yes') {
alert('No.  I actually have never worked a remote job before.');
}
else {
alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!')
}


let international = prompt('A few people in this 201 class have lived outside of the United States. Am I one of them?')
console.log('When asked to guess whether I have lived outside of the U.S., the user answered with ' + international);
international = international.toLowerCase();
if (international == 'yes') {
alert('You are right! I have lived many different places in my life. While most of those locations were in the U.S., I DID also spend several years living in the Canal Zone, in the Republic of Panama');
}
else if (international == 'no') {
alert('You guessed incorrectly. I have lived in the Canal Zone of the Republic of Panama.  I also have lived in several states around the U.S.');
}
else {
    alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!')
    }
    

let skydive = prompt('Have I ever jumped out of a perfectly good airplane in order to plummet thru the sky?');
console.log('When asked to guess whether I have ever gone skydiving before, the user answered with ' + skydive);
skydive = skydive.toLowerCase();
if (skydive == 'yes') {
    alert('Yes!  You are correct that I have gone skydiving! More than once!')
}
else if (skydive == 'no') {
alert('You guessed incorrectly, ' + nme + '. I actually HAVE! I have been skydiving more than once.')
}
else {
    alert('That is not a valid response.  Please reply to these questions only with either the word "yes" or the word "no"!')
    }
    

let military = prompt('Was I ever in the military?');
console.log('Concerning whether or not I have ever served in the military, the user answered with ' + military);
military = military.toLowerCase();
if (military == 'no') {
alert('You are correct, ' + nme + '. Although my early childhood involved a lot of time on U.S. military bases and a couple of my family members have worked as civilian contractors, I have never personally had any affiliation nor involvement in military service.');
}
else if (military == 'yes') {
alert('Okay, I have to admit that that one was a bit of a trick question. I grew up spending a lot of my early childhood on U.S. military bases, and a couple of my family members have worked as civilian contractors, but I have not personally had any affiliation nor involvement in military service.  So you got the question wrong. But the good news, ' + nme + ', is that you are now done with the guessing game!  That was the last question. The portal to my page is now open!');
}
else {
alert('That is not a valid response, ' + nme + '.  You were supposed to reply with either the word "yes" or the word "no"! But now the game is over.  That was the last question. So continue onward to my page!');
}


