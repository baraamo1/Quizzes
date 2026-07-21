let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let back = document.getElementById("back");
let finsh = document.getElementById("finsh");
let randomPlace = Math.floor(Math.random() * 4);
let questions = [
    "Which animal is known as the King of the Jungle?",
    "Which animal has a very long neck?",
    "Which animal is the largest land animal?",
    "Which bird cannot fly but can swim?",
    "Which animal is famous for carrying its baby in a pouch?",
    "Which animal is known for its black and white stripes?",
    "Which is the fastest land animal?",
    "Which animal is known as man's best friend?",
    "Which mammal can fly?",
    "Which animal changes its color to blend into its surroundings?",
    "Which is the largest animal on Earth?",
    "Which animal has the longest lifespan among reptiles?",
    "Which bird is the largest in the world?",
    "Which animal is famous for building dams?",
    "Which sea animal has eight arms?",
    "Which mammal lays eggs instead of giving birth?",
    "Which animal has the strongest bite force among land animals?",
    "Which bird is known for imitating human speech?",
    "Which animal is the only mammal covered in scales?",
    "Which marine animal is considered the largest predator on Earth?"
];
let saveChoses = [] ;
let rightAnswers = 0;
let userAnswers = [];
let wrongAnswer = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let level = -1;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let theRightAnswer = "";
let answerList = ["Lion", "Giraffe", "Elephant", "Penguin", "Kangaroo", "Zebra", "Cheetah", "Dog", "Bat", "Chameleon", "Blue Whale", "Turtle", "Ostrich", "Beaver", "Octopus", "Platypus", "Crocodile", "Parrot", "Pangolin", "Sperm Whale"];let progres = document.getElementById("progres");
let allQuestionAnswers = [["Lion", "Tiger", "Owl", "Goat"], ["Kangaroo", "Camel", "Flamingo", "Giraffe"], ["Octopus", "Elephant", "Giraffe", "Crocodile"], ["Penguin", "Owl", "Falcon", "Flamingo"], ["Octopus", "Crocodile", "Kangaroo", "Eagle"], ["Tiger", "Snake", "Zebra", "Penguin"], ["Tiger", "Sheep", "Dog", "Cheetah"], ["Flamingo", "Dog", "Goat", "Monkey"], ["Bat", "Owl", "Parrot", "Eagle"], ["Platypus", "Chameleon", "Rhinoceros", "Turtle"], ["Jellyfish", "Whale", "Elephant", "Blue Whale"], ["Camel", "Turtle", "Crocodile", "Panda"], ["Hippopotamus", "Leopard", "Ostrich", "Platypus"], ["Flamingo", "Bear", "Beaver", "Donkey"], ["Octopus", "Parrot", "Falcon", "Jellyfish"], ["Bat", "Chameleon", "Rabbit", "Platypus"], ["Tiger", "Lion", "Crocodile", "Cheetah"], ["Parrot", "Flamingo", "Bat", "Eagle"], ["Pangolin", "Crocodile", "Chimpanzee", "Snake"], ["Octopus", "Sperm Whale", "Turtle", "Shark"]];
let allAnswers = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Pangolin", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Sperm Whale", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Beaver", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let questionsnum = [0 , 1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ];
let randomAnswer1 = Math.floor(
    Math.random() * 50
)
let randomAnswer2 = Math.floor(
    Math.random() * 50
)
let randomAnswer3 = Math.floor(
    Math.random() * 50
)
let randomAnswer4 = Math.floor(
    Math.random() * 50
)

let rananswer1 = Math.floor(Math.random() * 4);

let rananswer2 = Math.floor(Math.random() * 4);
while (rananswer2 === rananswer1) {
    rananswer2 = Math.floor(Math.random() * 4);
}

let rananswer3 = Math.floor(Math.random() * 4);
while (rananswer3 === rananswer1 || rananswer3 === rananswer2) {
    rananswer3 = Math.floor(Math.random() * 4);
}

let rananswer4 = Math.floor(Math.random() * 4);
while (
    rananswer4 === rananswer1 ||
    rananswer4 === rananswer2 ||
    rananswer4 === rananswer3
) {
    rananswer4 = Math.floor(Math.random() * 4);
}







function checkRightAnswer1(){
    yourAnswer.textContent = `Your Answer is : ${answer1.textContent}`;
userAnswers[level] = answer1.textContent

}

function checkRightAnswer2(){
    yourAnswer.textContent = `Your Answer is : ${answer2.textContent}`;
userAnswers[level] = answer2.textContent

}

function checkRightAnswer3(){
    yourAnswer.textContent = `Your Answer is : ${answer3.textContent}`;
userAnswers[level] = answer3.textContent

}

function checkRightAnswer4(){
    yourAnswer.textContent = `Your Answer is : ${answer4.textContent}`;
userAnswers[level] = answer4.textContent

}




function NEXTfUNCTION (){
    yourAnswer.textContent = ""
mainQuestion.textContent = questions[level+1]
QuestionNum.textContent = `${level+2}.`
answer1.style.display="inline-block"
answer2.style.display="inline-block"
answer3.style.display="inline-block"
answer4.style.display="inline-block"
 answer = answerList[level+1];

if (randomPlace === 0) {
    randomAnswer1 = answer.indexOf(answer);
}else if (randomPlace === 1) {
    randomAnswer2 = answer.indexOf(answer);
}else if (randomPlace === 2){
    randomAnswer3 = answer.indexOf(answer);
}else {
    randomAnswer4 = answer.indexOf(answer);
}

 console.log(randomAnswer1)
 saveChoses = [randomAnswer1,randomAnswer2,randomAnswer3,randomAnswer4]

 answer1.textContent = allQuestionAnswers[level + 1][rananswer1] ;
 answer2.textContent = allQuestionAnswers[level + 1][rananswer2];
 answer3.textContent = allQuestionAnswers[level + 1][rananswer3];
 answer4.textContent = allQuestionAnswers[level + 1][rananswer4];

if(level == 0){
    back.style.display="block"
}
if(level == -1){
    back.style.display="none"
}
if(level == 18){
    next.style.display="none"
    finsh.style.display="block"
}

console.log(level)
console.log(userAnswers)
level++

}









function BACKfUNCTION (){
        yourAnswer.textContent = ""
    level--
mainQuestion.textContent = questions[level]
QuestionNum.textContent = `${level+1}.`

if (randomPlace === 0) {
    randomAnswer1 = answer.indexOf(answer);
}else if (randomPlace === 1) {
    randomAnswer2 = answer.indexOf(answer);
}else if (randomPlace === 2){
    randomAnswer3 = answer.indexOf(answer);
}else {
    randomAnswer4 = answer.indexOf(answer);
}


 answer1.textContent = allQuestionAnswers[level][rananswer1] ;
 answer2.textContent = allQuestionAnswers[level][rananswer2];
 answer3.textContent = allQuestionAnswers[level][rananswer3];
 answer4.textContent = allQuestionAnswers[level][rananswer4];



if(level == 18){
    next.style.display="block"
        finsh.style.display="none"

}
}