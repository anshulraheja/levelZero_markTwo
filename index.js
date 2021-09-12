var rs = require('readline-sync');
var chalk = require('chalk');
var log = console.log;

log(chalk.black.bgYellowBright.underline.bold('Welcome to the F.R.I.E.N.D.S Quiz Game!'));

// storing player name in a global variable
var username = rs.question("Spell out your name: ");

//greeting user
log(chalk.red.bold(`Hellllo ${username}!\n`));

//Description about the game 
log(chalk.black.bgBlue('Check out the Rules:'));
log(chalk.bgBlackBright('1. You have to write the correct option and hit enter.\n'+'2. Points:  Correct Answer:',chalk.green('+2')  +  '  Incorrect Answer:' ,chalk.redBright('-1 ')+'\n\n'));

rs.question(chalk.dim("Let's begin!! \n"+"Press Enter to start the game..."));
log('\n');

//variable to store the player score
var score = 0;

//varibale to store the question in the form of array of objects 
var questions = [
   {question: `Who was Monica’s first kiss?`,
    A: 'Chandler', 
    B:'Ross', 
    C:'Joey',
    answer: 'B'},
    {question: `How many sisters does Joey have?`,
    A: '5', 
    B:'6', 
    C:'7',
    answer: 'C'},
     {question: `How many times has Ross been married?`,
    A: '3', 
    B:'4', 
    C:'2',
    answer: 'A'},
     {question: `What is Rachel scared of?`,
    A: 'Dogs', 
    B:'Swings', 
    C:'Cats',
    answer: 'B'},
     {question: `Who hates Thanksgiving?`,
    A: 'Ross', 
    B:'Chandler', 
    C:'Joey',
    answer: 'B'},
];

//function to ask questions and calculate score
function gameplay(questions){
  let n = questions.length;
  let t = 0;
  let playAgain = 'N';
  for(let i=0;i<n;i++){
    t=i+1;
    log(chalk.inverse(t+'. '+questions[i].question));
    log(chalk.cyan('A: '+questions[i].A));
    log(chalk.cyan('B: '+questions[i].B));
    log(chalk.cyan('C: '+questions[i].C));

    var answer = rs.question('Answer: ');

    if(answer.toUpperCase() === questions[i].answer){
      console.log(chalk.green('Correct'));
      score = score + 2;
    }else{
      console.log(chalk.red('Incorrect'), 'The correct option was '+ chalk.green(questions[i].answer));
      score = score -1;
    }
  }

  
  //displaying final score 
  log(chalk.black.bgMagenta('\n'+ username +' Your final score is: '+ score +'\n'));

  
  //asking user to play game again
  playAgain = rs.question("Do you want to play again? Y/N: ")
  if(playAgain.toUpperCase() == 'Y' ){
    log(chalk.dim('\nSetting score to zero....\n'))
    score=0;
    gameplay(questions)
  }
  else{
    log(chalk.black.bgYellowBright('Thank you for participating!'));
  }
}

//calling functionh
gameplay(questions);
