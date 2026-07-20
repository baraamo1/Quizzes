let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let back = document.getElementById("back");
let rightAnswers = 0;
let wrongAnswer = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let changeAnswers = 0 ;
let level = 0;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let theRightAnswer = "";
let allAnswers1 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers2 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers3 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers4 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let questions = [0 , 1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ];
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


while (randomAnswer2 === randomAnswer1) {
    randomAnswer2 = Math.floor(Math.random() * 50);
}
while (randomAnswer3 === randomAnswer1 || randomAnswer3 === randomAnswer2) {
    randomAnswer3 = Math.floor(Math.random() * 50);
}
while (
    randomAnswer4 === randomAnswer1 ||
    randomAnswer4 === randomAnswer2 ||
    randomAnswer4 === randomAnswer3
) {
    randomAnswer4 = Math.floor(Math.random() * 50);
}







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

   yourAnswer.textContent = `Your Answer is : ${answer1.textContent}`
}


function checkRightAnswer2(){

      yourAnswer.textContent = `Your Answer is : ${answer2.textContent}`

}


function checkRightAnswer3(){

      yourAnswer.textContent = `Your Answer is : ${answer3.textContent}`

}

function checkRightAnswer4(){

      yourAnswer.textContent = `Your Answer is : ${answer4.textContent}`

}



function showAnswers() {
    randomAnswer1 = Math.floor(Math.random() * 50);
    randomAnswer2 = Math.floor(Math.random() * 50);
    randomAnswer3 = Math.floor(Math.random() * 50);
    randomAnswer4 = Math.floor(Math.random() * 50);

    answer1.textContent = allAnswers1[randomAnswer1];
    answer2.textContent = allAnswers2[randomAnswer2];
    answer3.textContent = allAnswers3[randomAnswer3];
    answer4.textContent = allAnswers4[randomAnswer4];
}

function NEXTfUNCTION (){
yourAnswer.textContent = ""

showAnswers()

if(questions[level] == 0){
    QuestionNum.textContent = `${level + 1}.`

    mainQuestion.textContent = `Which animal is known as the King of the Jungle?`;
    answer1.style.display="inline-block";
    answer2.style.display="inline-block";
    answer3.style.display="inline-block";
    answer4.style.display="inline-block";

    back.style.display="none"
}else if(questions[level] == 1){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = ``
mainQuestion.textContent = `Which animal has a very long neck?`;
  back.style.display="block"
 
}else if(questions[level] == 2){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is the largest land animal?`;
  

 
}else if(questions[level] == 3){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which bird cannot fly but can swim?`;
    
}else if(questions[level] == 4){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is famous for carrying its baby in a pouch?`;

 
}else if(questions[level] == 5){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is known for its black and white stripes?`;

 
}else if(questions[level] == 6){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which is the fastest land animal?`;

 
}else if(questions[level] == 7){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is known as man's best friend?`;

 
}else if(questions[level] == 8){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which mammal can fly?`;

 
}else if(questions[level] == 9){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal changes its color to blend into its surroundings?`;

 
}else if(questions[level] == 10){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which is the largest animal on Earth?`;

 
}else if(questions[level] == 11){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal has the longest lifespan among reptiles?`;

 
}else if(questions[level] == 12){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which bird is the largest in the world?`;

 
}else if(questions[level] == 13){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is famous for building dams?`;

 
}else if(questions[level] == 14){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which sea animal has eight arms?`;

 
}else if(questions[level] == 15){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which mammal lays eggs instead of giving birth?`;

 
}else if(questions[level] == 16){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal has the strongest bite force among land animals?`;

 
}else if(questions[level] == 17){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which bird is known for imitating human speech?`;

 
}else if(questions[level] == 18){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is the only mammal covered in scales?`;

 
}else if(questions[level] == 19){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which marine animal is considered the largest predator on Earth?`;
    next.style.display="none"
 
}
level++

console.log(level)

}



function BACKfUNCTION (){
level--
yourAnswer.textContent = ""
    randomAnswer1 = Math.floor(Math.random() * 50);
    randomAnswer2 = Math.floor(Math.random() * 50);
    randomAnswer3 = Math.floor(Math.random() * 50);
    randomAnswer4 = Math.floor(Math.random() * 50);
if(questions[level] == 1){
    QuestionNum.textContent = `${level}.`
 
    mainQuestion.textContent = `Which animal is known as the King of the Jungle?`;
     
    back.style.display="none"
}else if(questions[level] == 2){
    QuestionNum.textContent = `${level}.`
mainQuestion.textContent = `Which animal has a very long neck?`;

 
}else if(questions[level] == 3){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is the largest land animal?`;

 
}else if(questions[level] == 4){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which bird cannot fly but can swim?`;
    
}else if(questions[level] == 5){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is famous for carrying its baby in a pouch?`;

 
}else if(questions[level] == 6){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is known for its black and white stripes?`;

 
}else if(questions[level] == 7){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which is the fastest land animal?`;

 
}else if(questions[level] == 8){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is known as man's best friend?`;

 
}else if(questions[level] == 9){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which mammal can fly?`;

 
}else if(questions[level] == 10){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal changes its color to blend into its surroundings?`;

 
}else if(questions[level] == 11){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which is the largest animal on Earth?`;

 
}else if(questions[level] == 12){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal has the longest lifespan among reptiles?`;

 
}else if(questions[level] == 13){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which bird is the largest in the world?`;

 
}else if(questions[level] == 14){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is famous for building dams?`;

 
}else if(questions[level] == 15){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which sea animal has eight arms?`;

 
}else if(questions[level] == 16){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which mammal lays eggs instead of giving birth?`;

 
}else if(questions[level] == 17){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal has the strongest bite force among land animals?`;

 
}else if(questions[level] == 18){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which bird is known for imitating human speech?`;

 
}else if(questions[level] == 19){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which animal is the only mammal covered in scales?`;
    next.style.display="block"
 
}else if(questions[level] == 20){
    QuestionNum.textContent = `${level}.`
    mainQuestion.textContent = `Which marine animal is considered the largest predator on Earth?`;
    
 
}

console.log(level)
}


    




