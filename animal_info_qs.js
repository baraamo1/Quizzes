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
    answer1.textContent = "Elephant";
    answer = true;
}

if (rananswer1 == 1){
    answer2.textContent = "Elephant";
    answer = true;

    }

if (rananswer1 == 2){ 
    answer3.textContent = "Elephant";
    answer = true;

}

if (rananswer1 == 3){
    answer4.textContent = "Elephant";
    answer = true;
    }
    


if (rananswer2 == 0){
     answer1.textContent = "Lion";
    }
if (rananswer2 == 1){
     answer2.textContent = "Lion";
    }
if (rananswer2 == 2){
     answer3.textContent = "Lion";
    
    }
if (rananswer2 == 3){ 
    answer4.textContent = "Lion";
}


if (rananswer3 == 0){
     answer1.textContent = "Bear";
    }
if (rananswer3 == 1){
     answer2.textContent = "Bear";
    }
if (rananswer3 == 2){ 
    answer3.textContent = "Bear";
}
if (rananswer3 == 3){ 
    answer4.textContent = "Bear";

}


if (rananswer4 == 0){
     answer1.textContent = "Giraffe";
    }
if (rananswer4 == 1){
     answer2.textContent = "Giraffe";
    }
if (rananswer4 == 2){ 
    answer3.textContent = "Giraffe";
}
if (rananswer4 == 3){
     answer4.textContent = "Giraffe";
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
    if(yourAnswer.textContent == "Your Answer is : Elephant"){
        rightAnswers++
    }else{
        wrongAnswer++
    }
}




/*

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