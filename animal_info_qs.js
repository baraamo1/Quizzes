let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let rightAnswers = 0;
let wrongAnswer = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let level = 0;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let theRightAnswer = "";
let allAnswers1 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers2 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers3 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
let allAnswers4 = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Gorilla", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Horse", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Cat", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]

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






if (rananswer1 == 0){ 
    answer1.textContent = allAnswers1[randomAnswer1];
    answer = true;
}

if (rananswer1 == 1){
    answer2.textContent = allAnswers1[randomAnswer1];
    answer = true;

    }

if (rananswer1 == 2){ 
    answer3.textContent = allAnswers1[randomAnswer1];
    answer = true;

}

if (rananswer1 == 3){
    answer4.textContent = allAnswers1[randomAnswer1];
    answer = true;
    }
    


if (rananswer2 == 0){
     answer1.textContent = allAnswers2[randomAnswer2];
    }
if (rananswer2 == 1){
     answer2.textContent = allAnswers2[randomAnswer2];
    }
if (rananswer2 == 2){
     answer3.textContent = allAnswers2[randomAnswer2];
    
    }
if (rananswer2 == 3){ 
    answer4.textContent = allAnswers2[randomAnswer2];
}


if (rananswer3 == 0){
     answer1.textContent = allAnswers3[randomAnswer3];
    }
if (rananswer3 == 1){
     answer2.textContent = allAnswers3[randomAnswer3];
    }
if (rananswer3 == 2){ 
    answer3.textContent = allAnswers3[randomAnswer3];
}
if (rananswer3 == 3){ 
    answer4.textContent = allAnswers3[randomAnswer3];

}


if (rananswer4 == 0){
     answer1.textContent = allAnswers4[randomAnswer4];
    }
if (rananswer4 == 1){
     answer2.textContent = allAnswers4[randomAnswer4];
    }
if (rananswer4 == 2){ 
    answer3.textContent = allAnswers4[randomAnswer4];
}
if (rananswer4 == 3){
     answer4.textContent = allAnswers4[randomAnswer4];
    }




/**/
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

function NEXTfUNCTION (){
    let questions = [0 , 1 ,2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 ];
if(questions[level] == 0){
    QuestionNum.textContent = `${level + 1}.`
    mainQuestion.textContent = `Which animal is the largest land animal?`
    level++
}else if(questions[level] == 1){
    QuestionNum.textContent = `${level + 1}.`

    level++
}else if(questions[level] == 2){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 3){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 4){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 5){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 6){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 7){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 8){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 9){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 10){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 11){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 12){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 13){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 14){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 15){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 16){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 17){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 18){
    QuestionNum.textContent = `${level + 1}.`
    level++
}else if(questions[level] == 19){
    QuestionNum.textContent = `${level + 1}.`
    level++
}

}




/*
 



    if(yourAnswer.textContent == "Your Answer is : Elephant"){
        rightAnswers++
    }else{
        wrongAnswer++
    }





function checkRightAnswer (){
   if (    answer1.textContent == "Elephant"){
     rightAnswers++
     console.log("1 is right")
   }else    if (    answer2.textContent == "Elephant"){
     rightAnswers++
     console.log("2 is right")

   }else    if (    answer3.textContent == "Elephant"){
     rightAnswers++
     console.log("3 is right")

   }else    if (    answer4.textContent == "Elephant"){
     rightAnswers++
     console.log("4 is right")

   }else{
    wrongAnswer++
     console.log("wrong")

   }
   console.log(rightAnswers)
}
   */