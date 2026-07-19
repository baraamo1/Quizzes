let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let rightAnswers ;
let wrongAnswer ;
function checkRightAnswer(){


if(answer1.onclick){
    wrongAnswer ++;
}
else if(answer2.onclick){
    rightAnswers ++;
}
else if(answer3.onclick){
    wrongAnswer ++;
}
else if(answer4.onclick){
    wrongAnswer ++;

}

}

