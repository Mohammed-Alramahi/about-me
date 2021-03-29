'use strict';
let userName = prompt('Welcome to my website, Type your name below so we can know each other!');

alert('Hello ' + userName + ' I hope you are doing great');
alert('I\'d like to play a game If you guess right then you rock!, answer with yes/y or no/n');

function hobby() {
  let myHobby = prompt('Do you think gaming is my favourite hobby?').toLowerCase();
  while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') {
    myHobby = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  //console.log(userName + 'answered: ' + myHobby + ' for the first question');
  switch (myHobby) {
  case 'yes':
  case 'y':
    alert('You guessed right, I mean who doesn\'t like gaming');
    break;
  case 'no':
  case 'n':
    alert('Wrong one but it\'s okay');
    break;
  }
}
hobby();

function cool() {
  let isCool = prompt('Do you think I\'m cool? answer with yes or I\'ll kill you :p').toLowerCase();
  while (isCool !== 'yes' && isCool !== 'y' && isCool !== 'no' && isCool !== 'n') {
    isCool = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  //console.log(userName + 'answered: ' + isCool + ' for the second question');
  switch (isCool) {
  case 'yes':
  case 'y':
    alert('of course I\'m cool, thx a lot <3 ');
    break;
  case 'no':
  case 'n':
    alert('what do you mean by no :\\ I\'m kinda disappointed');
    break;
  }
}
cool();

function programmer() {
  let programmingPrefer = prompt('Would I rather to be programmer instead of being rich?').toLowerCase();
  while (programmingPrefer !== 'yes' && programmingPrefer !== 'y' && programmingPrefer !== 'no' && programmingPrefer !== 'n') {
    programmingPrefer = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  console.log(userName + 'answered: ' + programmingPrefer + ' for the third question');

  switch (programmingPrefer) {
  case 'yes':
  case 'y':
    alert('Wrong answer, I like programming but I like money more :D');
    break;
  case 'no':
  case 'n':
    alert('Gimme money!!!!');
    break;
  }
}
programmer();

function launch() {
  let favLaunch = prompt('Is mansaf my favourite thing to eat? If I was you, I\'ll totally answer yes').toLowerCase();
  while (favLaunch !== 'yes' && favLaunch !== 'y' && favLaunch !== 'no' && favLaunch !== 'n') {
    favLaunch = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  //console.log(userName + 'answered: ' + favLaunch + ' for the third question');

  switch (favLaunch) {
  case 'yes':
  case 'y':
    alert('specially on friday.. yummy!');
    break;
  case 'no':
  case 'n':
    alert('what are you talking about? mansaf is the best');
    break;
  }
}
launch();

function old() {
  let isOld = prompt('Am I old to be a here?').toLowerCase();
  while (isOld !== 'yes' && isOld !== 'y' && isOld !== 'no' && isOld !== 'n') {
    isOld = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  //console.log(userName + 'answered: ' + isOld + ' for the last question');
  switch (isOld) {
  case 'yes':
  case 'y':
    alert('Is 23 years age considered old? weird!!');
    break;
  case 'no':
  case 'n':
    alert('I\'m only 23 so yeah, I\'m not old :D ');
    break;
  }
}
old();
document.getElementById('intro-header').innerHTML='Greetings, '+userName;

