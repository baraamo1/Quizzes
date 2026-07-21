let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let back = document.getElementById("back");
let rightAnswers = 0;
let userAnswers = [];
let wrongAnswer = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let level = 0;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let theRightAnswer = "";
let answerList = ["Lion", "Giraffe", "Elephant", "Penguin", "Kangaroo", "Zebra", "Cheetah", "Dog", "Bat", "Chameleon", "Blue Whale", "Turtle", "Ostrich", "Beaver", "Octopus", "Platypus", "Crocodile", "Parrot", "Pangolin", "Sperm Whale"];let progres = document.getElementById("progres");

let allAnswers = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Cheetah", "Leopard", "Wolf", "Fox", "Bear", "Panda", "Kangaroo", "Koala", "Monkey", "Pangolin", "Chimpanzee", "Hippopotamus", "Rhinoceros", "Camel", "Sperm Whale", "Donkey", "Cow", "Goat", "Sheep", "Pig", "Dog", "Beaver", "Rabbit", "Deer", "Squirrel", "Mouse", "Bat", "Eagle", "Owl", "Falcon", "Penguin", "Ostrich", "Parrot", "Flamingo", "Crocodile", "Snake", "Turtle", "Chameleon", "Octopus", "Shark", "Dolphin", "Whale", "Blue Whale", "Jellyfish", "Platypus"]
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

function finsh(){


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
}
finsh()





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
    userAnswers[level - 1] = answer1.textContent;
    yourAnswer.textContent = `Your Answer is : ${answer1.textContent}`;

}

function checkRightAnswer2(){
    userAnswers[level - 1] = answer2.textContent;
    yourAnswer.textContent = `Your Answer is : ${answer2.textContent}`;
}

function checkRightAnswer3(){
    userAnswers[level - 1] = answer3.textContent;
    yourAnswer.textContent = `Your Answer is : ${answer3.textContent}`;
}

function checkRightAnswer4(){
    userAnswers[level - 1] = answer4.textContent;
    yourAnswer.textContent = `Your Answer is : ${answer4.textContent}`;
}





function NEXTfUNCTION (){
rightAnswers = 0;
wrongAnswer = 0;
console.log(userAnswers);
for (let i = 0; i < answerList.length; i++) {
    if (userAnswers[i] === answerList[i]) {
        rightAnswers++;
        console.log("right")
    } else if (userAnswers[i] !== undefined) {
        wrongAnswer++;
        console.log("wrong")

    }
}
yourAnswer.textContent = ""
    randomAnswer1 = Math.floor(Math.random() * 50);
    randomAnswer2 = Math.floor(Math.random() * 50);
    randomAnswer3 = Math.floor(Math.random() * 50);
    randomAnswer4 = Math.floor(Math.random() * 50);
console.log(randomAnswer1,randomAnswer2,randomAnswer3,randomAnswer4)

if(questions[level] == 0){
    randomAnswer1 = allAnswers.indexOf("Lion");
            randomAnswer2 = allAnswers.indexOf("Tiger");
            randomAnswer3 = allAnswers.indexOf("Owl");
            randomAnswer4 = allAnswers.indexOf("Goat");

    QuestionNum.textContent = `${level + 1}.` ;  finsh()    
 progres.textContent = `Level : ${level + 1}/20`
    mainQuestion.textContent = `Which animal is known as the King of the Jungle?`;
    answer1.style.display="inline-block";
    answer2.style.display="inline-block";
    answer3.style.display="inline-block";
    answer4.style.display="inline-block";

    back.style.display="none"

answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]




}else if(questions[level] == 1){
    
        randomAnswer4 = allAnswers.indexOf("Giraffe");
                    randomAnswer2 = allAnswers.indexOf("Camel");
            randomAnswer3 = allAnswers.indexOf("Flamingo");
            randomAnswer1 = allAnswers.indexOf("Kangaroo");

    QuestionNum.textContent = `${level + 1}.` ;  finsh()    
    mainQuestion.textContent = ``
mainQuestion.textContent = `Which animal has a very long neck?`;
  back.style.display="block"
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}else if(questions[level] == 2){
            randomAnswer2 = allAnswers.indexOf("Elephant");
             randomAnswer4 = allAnswers.indexOf("Crocodile");
            randomAnswer3 = allAnswers.indexOf("Giraffe");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()    
    mainQuestion.textContent = `Which animal is the largest land animal?`;
  answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`


 
}else if(questions[level] == 3){
            randomAnswer1 = allAnswers.indexOf("Penguin");
            randomAnswer2 = allAnswers.indexOf("Owl");
            randomAnswer3 = allAnswers.indexOf("Falcon");
            randomAnswer4 = allAnswers.indexOf("Flamingo");

    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which bird cannot fly but can swim?`;
    answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}else if(questions[level] == 4){
    randomAnswer3 = allAnswers.indexOf("Kangaroo");
                    randomAnswer2 = allAnswers.indexOf("Crocodile");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is famous for carrying its baby in a pouch?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 5){
        randomAnswer3 = allAnswers.indexOf("Zebra");
            randomAnswer2 = allAnswers.indexOf("Snake");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer4 = allAnswers.indexOf("Penguin");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is known for its black and white stripes?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}else if(questions[level] == 6){
            randomAnswer4 = allAnswers.indexOf("Cheetah");
            randomAnswer2 = allAnswers.indexOf("Sheep");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer3 = allAnswers.indexOf("Dog");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which is the fastest land animal?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 7){
    randomAnswer2 = allAnswers.indexOf("Dog");
            randomAnswer4 = allAnswers.indexOf("Monkey");
            randomAnswer1 = allAnswers.indexOf("Flamingo");
            randomAnswer3 = allAnswers.indexOf("Goat");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is known as man's best friend?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 8){
        randomAnswer1 = allAnswers.indexOf("Bat");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer2 = allAnswers.indexOf("Owl");
            randomAnswer3 = allAnswers.indexOf("Parrot");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which mammal can fly?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 9){
  randomAnswer2 = allAnswers.indexOf("Chameleon");
            randomAnswer4 = allAnswers.indexOf("Turtle");
            randomAnswer1 = allAnswers.indexOf("Platypus");
            randomAnswer3 = allAnswers.indexOf("Rhinoceros");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal changes its color to blend into its surroundings?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 10){
  randomAnswer4 = allAnswers.indexOf("Blue Whale");
            randomAnswer2 = allAnswers.indexOf("Whale");
            randomAnswer1 = allAnswers.indexOf("Jellyfish");
            randomAnswer3 = allAnswers.indexOf("Elephant");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which is the largest animal on Earth?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}else if(questions[level] == 11){
      randomAnswer2 = allAnswers.indexOf("Turtle");
            randomAnswer4 = allAnswers.indexOf("Panda");
            randomAnswer1 = allAnswers.indexOf("Camel");
            randomAnswer3 = allAnswers.indexOf("Crocodile");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal has the longest lifespan among reptiles?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}else if(questions[level] == 12){
      randomAnswer3 = allAnswers.indexOf("Ostrich");
            randomAnswer4 = allAnswers.indexOf("Platypus");
            randomAnswer1 = allAnswers.indexOf("Hippopotamus");
            randomAnswer2 = allAnswers.indexOf("Leopard");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which bird is the largest in the world?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 13){
          randomAnswer3 = allAnswers.indexOf("Beaver");
            randomAnswer4 = allAnswers.indexOf("Donkey");
            randomAnswer1 = allAnswers.indexOf("Flamingo");
            randomAnswer2 = allAnswers.indexOf("Bear");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is famous for building dams?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 14){
    randomAnswer1 = allAnswers.indexOf("Octopus");
            randomAnswer4 = allAnswers.indexOf("Jellyfish");
            randomAnswer3 = allAnswers.indexOf("Falcon");
            randomAnswer2 = allAnswers.indexOf("Parrot");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which sea animal has eight arms?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 15){
   randomAnswer4 = allAnswers.indexOf("Platypus");
            randomAnswer3 = allAnswers.indexOf("Rabbit");
            randomAnswer1 = allAnswers.indexOf("Bat");
            randomAnswer2 = allAnswers.indexOf("Chameleon");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which mammal lays eggs instead of giving birth?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 16){
       randomAnswer3 = allAnswers.indexOf("Crocodile");
            randomAnswer4 = allAnswers.indexOf("Cheetah");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer2 = allAnswers.indexOf("Lion");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal has the strongest bite force among land animals?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 17){
       randomAnswer1 = allAnswers.indexOf("Parrot");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer3 = allAnswers.indexOf("Bat");
            randomAnswer2 = allAnswers.indexOf("Flamingo");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which bird is known for imitating human speech?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 18){
           randomAnswer1 = allAnswers.indexOf("Pangolin");
            randomAnswer4 = allAnswers.indexOf("Snake");
            randomAnswer3 = allAnswers.indexOf("Chimpanzee");
            randomAnswer2 = allAnswers.indexOf("Crocodile");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is the only mammal covered in scales?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

 
}else if(questions[level] == 19){
randomAnswer2 = allAnswers.indexOf("Sperm Whale");
            randomAnswer4 = allAnswers.indexOf("Shark");
            randomAnswer3 = allAnswers.indexOf("Turtle");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level + 1}.` ;  finsh()  
    mainQuestion.textContent = `Which marine animal is considered the largest predator on Earth?`;
    next.style.display="none"
 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level + 1}/20`

}
level++


}


function BACKfUNCTION (){
level--
yourAnswer.textContent = ""
    randomAnswer1 = Math.floor(Math.random() * 50);
    randomAnswer2 = Math.floor(Math.random() * 50);
    randomAnswer3 = Math.floor(Math.random() * 50);
    randomAnswer4 = Math.floor(Math.random() * 50);


if(questions[level] == 1){
    randomAnswer1 = allAnswers.indexOf("Lion");
            randomAnswer2 = allAnswers.indexOf("Tiger");
            randomAnswer3 = allAnswers.indexOf("Owl");
            randomAnswer4 = allAnswers.indexOf("Goat");

    QuestionNum.textContent = `${level}.` ;  finsh()    
 progres.textContent = `Level : ${level}/20`
    mainQuestion.textContent = `Which animal is known as the King of the Jungle?`;
    answer1.style.display="inline-block";
    answer2.style.display="inline-block";
    answer3.style.display="inline-block";
    answer4.style.display="inline-block";

    back.style.display="none"

answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]



}else if(questions[level] == 2){
    
        randomAnswer4 = allAnswers.indexOf("Giraffe");
                    randomAnswer2 = allAnswers.indexOf("Camel");
            randomAnswer3 = allAnswers.indexOf("Flamingo");
            randomAnswer1 = allAnswers.indexOf("Kangaroo");

    QuestionNum.textContent = `${level}.` ;  finsh()    
    mainQuestion.textContent = ``
mainQuestion.textContent = `Which animal has a very long neck?`;
  back.style.display="block"
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`
 
}else if(questions[level] == 3){
            randomAnswer2 = allAnswers.indexOf("Elephant");
             randomAnswer4 = allAnswers.indexOf("Crocodile");
            randomAnswer3 = allAnswers.indexOf("Giraffe");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level}.` ;  finsh()    
    mainQuestion.textContent = `Which animal is the largest land animal?`;
  answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`


 
}else if(questions[level] == 4){
            randomAnswer1 = allAnswers.indexOf("Penguin");
            randomAnswer2 = allAnswers.indexOf("Owl");
            randomAnswer3 = allAnswers.indexOf("Falcon");
            randomAnswer4 = allAnswers.indexOf("Flamingo");

    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which bird cannot fly but can swim?`;
    answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

}else if(questions[level] == 5){
    randomAnswer3 = allAnswers.indexOf("Kangaroo");
                    randomAnswer2 = allAnswers.indexOf("Crocodile");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is famous for carrying its baby in a pouch?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 6){
        randomAnswer3 = allAnswers.indexOf("Zebra");
            randomAnswer2 = allAnswers.indexOf("Snake");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer4 = allAnswers.indexOf("Penguin");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is known for its black and white stripes?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

}else if(questions[level] == 7){
            randomAnswer4 = allAnswers.indexOf("Cheetah");
            randomAnswer2 = allAnswers.indexOf("Sheep");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer3 = allAnswers.indexOf("Dog");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which is the fastest land animal?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 8){
    randomAnswer2 = allAnswers.indexOf("Dog");
            randomAnswer4 = allAnswers.indexOf("Monkey");
            randomAnswer1 = allAnswers.indexOf("Flamingo");
            randomAnswer3 = allAnswers.indexOf("Goat");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is known as man's best friend?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 9){
        randomAnswer1 = allAnswers.indexOf("Bat");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer2 = allAnswers.indexOf("Owl");
            randomAnswer3 = allAnswers.indexOf("Parrot");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which mammal can fly?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 10){
  randomAnswer2 = allAnswers.indexOf("Chameleon");
            randomAnswer4 = allAnswers.indexOf("Turtle");
            randomAnswer1 = allAnswers.indexOf("Platypus");
            randomAnswer3 = allAnswers.indexOf("Rhinoceros");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal changes its color to blend into its surroundings?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 11){
  randomAnswer4 = allAnswers.indexOf("Blue Whale");
            randomAnswer2 = allAnswers.indexOf("Whale");
            randomAnswer1 = allAnswers.indexOf("Jellyfish");
            randomAnswer3 = allAnswers.indexOf("Elephant");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which is the largest animal on Earth?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

}else if(questions[level] == 12){
      randomAnswer2 = allAnswers.indexOf("Turtle");
            randomAnswer4 = allAnswers.indexOf("Panda");
            randomAnswer1 = allAnswers.indexOf("Camel");
            randomAnswer3 = allAnswers.indexOf("Crocodile");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal has the longest lifespan among reptiles?`;

 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

}else if(questions[level] == 13){
      randomAnswer3 = allAnswers.indexOf("Ostrich");
            randomAnswer4 = allAnswers.indexOf("Platypus");
            randomAnswer1 = allAnswers.indexOf("Hippopotamus");
            randomAnswer2 = allAnswers.indexOf("Leopard");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which bird is the largest in the world?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 14){
          randomAnswer3 = allAnswers.indexOf("Beaver");
            randomAnswer4 = allAnswers.indexOf("Donkey");
            randomAnswer1 = allAnswers.indexOf("Flamingo");
            randomAnswer2 = allAnswers.indexOf("Bear");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is famous for building dams?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 15){
    randomAnswer1 = allAnswers.indexOf("Octopus");
            randomAnswer4 = allAnswers.indexOf("Jellyfish");
            randomAnswer3 = allAnswers.indexOf("Falcon");
            randomAnswer2 = allAnswers.indexOf("Parrot");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which sea animal has eight arms?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 16){
   randomAnswer4 = allAnswers.indexOf("Platypus");
            randomAnswer3 = allAnswers.indexOf("Rabbit");
            randomAnswer1 = allAnswers.indexOf("Bat");
            randomAnswer2 = allAnswers.indexOf("Chameleon");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which mammal lays eggs instead of giving birth?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 17){
       randomAnswer3 = allAnswers.indexOf("Crocodile");
            randomAnswer4 = allAnswers.indexOf("Cheetah");
            randomAnswer1 = allAnswers.indexOf("Tiger");
            randomAnswer2 = allAnswers.indexOf("Lion");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal has the strongest bite force among land animals?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 18){
       randomAnswer1 = allAnswers.indexOf("Parrot");
            randomAnswer4 = allAnswers.indexOf("Eagle");
            randomAnswer3 = allAnswers.indexOf("Bat");
            randomAnswer2 = allAnswers.indexOf("Flamingo");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which bird is known for imitating human speech?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 19){
           randomAnswer1 = allAnswers.indexOf("Pangolin");
            randomAnswer4 = allAnswers.indexOf("Snake");
            randomAnswer3 = allAnswers.indexOf("Chimpanzee");
            randomAnswer2 = allAnswers.indexOf("Crocodile");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which animal is the only mammal covered in scales?`;
answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

 
}else if(questions[level] == 20){
randomAnswer2 = allAnswers.indexOf("Sperm Whale");
            randomAnswer4 = allAnswers.indexOf("Shark");
            randomAnswer3 = allAnswers.indexOf("Turtle");
            randomAnswer1 = allAnswers.indexOf("Octopus");
    QuestionNum.textContent = `${level}.` ;  finsh()  
    mainQuestion.textContent = `Which marine animal is considered the largest predator on Earth?`;
    next.style.display="none"
 answer1.textContent = allAnswers[randomAnswer1]
answer2.textContent = allAnswers[randomAnswer2]
answer3.textContent = allAnswers[randomAnswer3]
answer4.textContent = allAnswers[randomAnswer4]
 progres.textContent = `Level : ${level}/20`

}


}

function mix(){
    
    randomAnswer1 = Math.floor(Math.random() * 50);
    randomAnswer2 = Math.floor(Math.random() * 50);
    randomAnswer3 = Math.floor(Math.random() * 50);
    randomAnswer4 = Math.floor(Math.random() * 50);

}
