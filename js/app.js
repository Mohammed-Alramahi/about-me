'use strict';
let userPoints = 0;
let userName = prompt('Welcome to my website, Type your name below so we can know each other!');

alert('Hello ' + userName + ' I hope you are doing great');
alert('I\'d like to play a game If you guess right then you rock!, answer with yes/y or no/n');

//question #1

function question1(){

  let myHobby = prompt('Do you think gaming is my favourite hobby?').toLowerCase();
  while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') {
    myHobby = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  //console.log(userName + ' answered: ' + myHobby + ' for the first question');
  if (myHobby === 'yes' || myHobby === 'y') {
    alert('You guessed right, I mean who doesn\'t like gaming');
    userPoints++;
  }
  else {
    alert('Wrong one but it\'s okay');
  }
}
question1();



//question #2
function question2(){
  let isCool = prompt('Do you think I\'m cool? answer with yes or I\'ll kill you :p').toLowerCase();
while (isCool !== 'yes' && isCool !== 'y' && isCool !== 'no' && isCool !== 'n') {
  isCool = prompt('try typing yes/y or no/n only please!').toLowerCase();
}
//console.log(userName + ' answered: ' + isCool + ' for the second question');
if (isCool === 'yes' || isCool === 'y') {
  userPoints++;
  alert('of course I\'m cool, thx a lot <3 ');
}
else {

  alert('what do you mean by no :\\ I\'m kinda disappointed');
}
}
 question2();

//question #3
function question3(){
  let programmingPrefer = prompt('Would I rather to be programmer instead of being rich?').toLowerCase();
while (programmingPrefer !== 'yes' && programmingPrefer !== 'y' && programmingPrefer !== 'no' && programmingPrefer !== 'n') {
  programmingPrefer = prompt('try typing yes/y or no/n only please!').toLowerCase();
}
//console.log(userName + ' answered: ' + programmingPrefer + ' for the third question');

if (programmingPrefer === 'yes' || programmingPrefer === 'y') {
  alert('Wrong answer, I like programming but I like money more :D');
}
else {
  userPoints++;
  alert('Gimme money!!!!');
}
}
question3();

//question #4
function question4(){
  let favLaunch = prompt('Is mansaf my favourite thing to eat? If I was you, I\'ll totally answer yes').toLowerCase();
while (favLaunch !== 'yes' && favLaunch !== 'y' && favLaunch !== 'no' && favLaunch !== 'n') {
  favLaunch = prompt('try typing yes/y or no/n only please!').toLowerCase();
}
//console.log(userName + ' answered: ' + favLaunch + ' for the third question');

if (favLaunch === 'yes' || favLaunch === 'y') {
  userPoints++;
  alert('specially on friday.. yummy!');
}
else {
  alert('what are you talking about? mansaf is the best');
}
}
question4();


//question #5
function question5(){
  let isOld = prompt('Am I old to be a here?').toLowerCase();
while (isOld !== 'yes' && isOld !== 'y' && isOld !== 'no' && isOld !== 'n') {
  isOld = prompt('try typing yes/y or no/n only please!').toLowerCase();
}
//console.log(userName + ' answered: ' + isOld + ' for the last question');
if (isOld === 'yes' || isOld === 'y') {
  alert('Is 23 years age considered old? weird!!');
}
else {
  userPoints++;
  alert('I\'m only 23 so yeah, I\'m not old :D ');
}
console.log(userPoints);

}
question5();

//question #6
function question6(){
  alert('You are no doing bad so far, This one should be easy for you');
let userNumberInput = prompt('on a scale of 1 to 10 what do you think about me?');
for (let i = 0; i < 4; i++) {

  if (userNumberInput < 7) {
    alert('have you lost your mind? I deserve more than that!');
    userNumberInput = prompt('try again, on a scale of 1 to 10 what do you think about me?');
  }
  else if (userNumberInput > 5 && userNumberInput <= 9) {
    alert('You are getting there, but still not right :)');
    userNumberInput = prompt('try again, on a scale of 1 to 10 what do you think about me?');
  }
  if (userNumberInput === '10') {
    userPoints++;
    alert('Be my friend !, you are pretty smart');
    break;
  }
}
}
question6();

//question #7
//csgo,gta,dirt only these are the correct answers
alert('This one is a bit tricky, but I want to push you a little bit further');
let games = ['csgo', 'gta', 'dirt'];
let userGame = prompt('which one of these games Do I prefer most?\n csgo,pubg,lol,poker,gta,dirt,fifa,pes').toLowerCase();
let result = false;
for (let i = 5; i >= 0; i--) {

  for (let j = 0; j < games.length; j++) {
    if (userGame === games[j]) {
      result = true;
      break;
    }
  }
  if (result === true) {
    userPoints++;
    alert(`Oh boy this getting spicy!!`);
    break;
  }
  else {
    userGame = prompt(`try again you still have ${i} tries left`);
  }
}
document.getElementById('intro-header').innerHTML = `Congrats,  ${userName} you got ${userPoints} out of 7`;

