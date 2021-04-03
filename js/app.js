'use strict';
let userPoints = 0;
let userName = prompt('Welcome to my website, Type your name below so we can know each other!');

alert('Hello ' + userName + ' I hope you are doing great');
alert('I\'d like to play a game If you guess right then you rock!, answer with yes/y or no/n');

function question1() {

  let myHobby = prompt('Do you think gaming is my favourite hobby?').toLowerCase();
  while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') {
    myHobby = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  if (myHobby === 'yes' || myHobby === 'y') {
    alert('You guessed right, I mean who doesn\'t like gaming');
    userPoints++;
  }
  else {
    alert('Wrong one but it\'s okay');
  }
}
question1();


function question2() {
  let isCool = prompt('Do you think I\'m cool? answer with yes or I\'ll kill you :p').toLowerCase();
  while (isCool !== 'yes' && isCool !== 'y' && isCool !== 'no' && isCool !== 'n') {
    isCool = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  if (isCool === 'yes' || isCool === 'y') {
    userPoints++;
    alert('of course I\'m cool, thx a lot <3 ');
  }
  else {

    alert('what do you mean by no :\\ I\'m kinda disappointed');
  }
}
question2();


function question3() {
  let programmingPrefer = prompt('Would I rather to be programmer instead of being rich?').toLowerCase();
  while (programmingPrefer !== 'yes' && programmingPrefer !== 'y' && programmingPrefer !== 'no' && programmingPrefer !== 'n') {
    programmingPrefer = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }

  if (programmingPrefer === 'yes' || programmingPrefer === 'y') {
    alert('Wrong answer, I like programming but I like money more :D');
  }
  else {
    userPoints++;
    alert('Gimme money!!!!');
  }
}
question3();


function question4() {
  let favLaunch = prompt('Is mansaf my favourite thing to eat? If I was you, I\'ll totally answer yes').toLowerCase();
  while (favLaunch !== 'yes' && favLaunch !== 'y' && favLaunch !== 'no' && favLaunch !== 'n') {
    favLaunch = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  if (favLaunch === 'yes' || favLaunch === 'y') {
    userPoints++;
    alert('specially on friday.. yummy!');
  }
  else {
    alert('what are you talking about? mansaf is the best');
  }
}
question4();


function question5() {
  let isOld = prompt('Am I old to be a here?').toLowerCase();
  while (isOld !== 'yes' && isOld !== 'y' && isOld !== 'no' && isOld !== 'n') {
    isOld = prompt('try typing yes/y or no/n only please!').toLowerCase();
  }
  if (isOld === 'yes' || isOld === 'y') {
    alert('Is 23 years age considered old? weird!!');
  }
  else {
    userPoints++;
    alert('I\'m only 23 so yeah, I\'m not old :D ');
  }


}
question5();

function question6() {
  alert('You are no doing bad so far, This one should be easy for you');
  let userNumberInput = prompt('on a scale of 1 to 10 what do you think about me?');
  for (let i = 3; i >= 0; i--) {
    console.log(i);
    if (i !== 0) {
      if (userNumberInput < 7) {
        alert(`have you lost your mind? I deserve more than that!\n You have ${i} tries left`);
        userNumberInput = prompt('try again, on a scale of 1 to 10 what do you think about me?');
      }
      else if (userNumberInput > 5 && userNumberInput <= 8) {
        alert(`You are getting there, but still not right :)\n You have ${i} tries left`);
        userNumberInput = prompt('try again, on a scale of 1 to 10 what do you think about me?');
      }
      if (userNumberInput === '10') {
        userPoints++;
        alert('10 is my low I know :)');
        break;
      }
    }
    else {
      alert('that question was very simple but unfotunately\n you couldn\'t manage to guess 10 -_-');
    }
  }
}
question6();

function question7() {
  let games = ['gta', 'csgo', 'dirt', 'pes', 'fifa'];
  let userInput = null;
  let flag = false;
  let tries = 5;
  Tries: while (tries >= 0) {
    userInput = prompt('can you guess my favourite games?').toLowerCase();
    for (let i = 0; i < games.length; i++) {
      if (userInput === games[i]) {
        flag = true;
        break Tries;
      }
    }
    if (tries > 0) {
      if (tries <= 3) {
        alert(`You have ${tries} tries choose wisely!\n try one of these but this considered cheating ${games}`);
      }
      else {
        alert(`You have ${tries} tries choose wisely!`);
      }

    }
    else {
      alert('You didn\'t answer correctly');
    }
    tries--;
  }
  if (flag) {
    alert('You are correct my dear');
  }
  else {
    alert(`The correct answer was one of those ${games}`);
  }
}

question7();
if (userPoints >= 4 && userPoints < 6) {
  document.getElementById('intro-header').innerHTML = `That was not bad,  ${userName} you got ${userPoints} out of 7`;
}
else if (userPoints >= 6) {
  document.getElementById('intro-header').innerHTML = `Congrats!!,  ${userName} you got ${userPoints} out of 7`;
}
else if (userPoints < 4) {
  document.getElementById('intro-header').innerHTML = `U might want to study dear:   ${userName} you got ${userPoints} out of 7`;
}

