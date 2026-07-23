let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let theResult = document.getElementById("results");
let next = document.getElementById("next");
let back = document.getElementById("back");
let finsh = document.getElementById("finsh");
let randomPlace = Math.floor(Math.random() * 4);
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");

let questions = [
    "Which country's flag is known as the Union Jack?",
    "Which country's flag has a red circle on a white background?",
    "Which country's flag features 50 stars and 13 stripes?",
    "Which country's flag has a red maple leaf in the center?",
    "Which country's flag is green with a white crescent and star?",
    "Which country's flag has a red circle in the middle of a green background?",
    "Which country's flag has three vertical stripes: blue, white, and red?",
    "Which country's flag has a blue cross on a white background?",
    "Which country's flag has a yellow cross on a blue background?",
    "Which country's flag has a red background with five yellow stars?",
    "Which country's flag is green, white, and orange with vertical stripes?",
    "Which country's flag has black, red, and yellow horizontal stripes?",
    "Which country's flag has a red and white design with two red bars and a maple leaf?",
    "Which country's flag has green, white, and red vertical stripes?",
    "Which country's flag features the Union Jack and stars representing the Southern Cross?",
    "Which country's flag features an eagle in the center?", 
    "Which country's flag is red with a white crescent and star?",
    "Which country's flag has a white cross on a red background?",
    "Which country's flag has a red dragon on a green and white background?",
    "Which country's flag has a blue, yellow, and red vertical tricolor?"
];
let rightAnswers = 0;
let userAnswers = [];
let text = [];

let wrongAnswers = 0;
let selectedAnswer = "";
let yourAnswer = document.getElementById("yourAnswer");
let answer;
let level = -1;
let QuestionNum = document.getElementById("qnum");
let mainQuestion = document.getElementById("mainqs");
let answerList = ["United Kingdom", "Japan", "United States", "Canada", "Pakistan", "Bangladesh", "France", "Finland", "Sweden", "China", "Ireland", "Germany", "Canada", "Italy", "Australia", "Egypt", "Turkey", "Switzerland", "Wales", "Romania"];
let progres = document.getElementById("progres");
let allQuestionAnswers = [["United Kingdom", "Australia", "New Zealand", "Iceland"], ["Japan", "Bangladesh", "South Korea", "Palau"], ["United States", "Liberia", "Malaysia", "Cuba"], ["Canada", "Austria", "Peru", "Latvia"], ["Pakistan", "Algeria", "Turkey", "Tunisia"], ["Bangladesh", "Japan", "Palau", "Greenland"], ["France", "Netherlands", "Luxembourg", "Russia"], ["Finland", "Sweden", "Norway", "Denmark"], ["Sweden", "Finland", "Norway", "Iceland"], ["China", "Vietnam", "North Korea", "Singapore"], ["Ireland", "Ivory Coast", "Italy", "Mexico"], ["Germany", "Belgium", "Armenia", "Lithuania"], ["Canada", "Austria", "Peru", "Poland"], ["Italy", "Mexico", "Ireland", "Hungary"], ["Australia", "New Zealand", "Fiji", "Tuvalu"], ["Mexico", "Egypt", "Albania", "Germany"], ["Turkey", "Tunisia", "Algeria", "Pakistan"], ["Switzerland", "Denmark", "England", "Georgia"], ["Wales", "Bhutan", "Scotland", "China"], ["Romania", "Chad", "Moldova", "Andorra"]];


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


function random(){
while (rananswer2 === rananswer1) {
    rananswer2 = Math.floor(Math.random() * 4);
}

while (rananswer3 === rananswer1 || rananswer3 === rananswer2) {
    rananswer3 = Math.floor(Math.random() * 4);
}

while (
    rananswer4 === rananswer1 ||
    rananswer4 === rananswer2 ||
    rananswer4 === rananswer3
) {
    rananswer4 = Math.floor(Math.random() * 4);
}  
}




function checkRightAnswer1(){
    yourAnswer.textContent = `You selected : ${answer1.textContent}`;
userAnswers[level] = answer1.textContent
text[level] = yourAnswer.textContent
}

function checkRightAnswer2(){
    yourAnswer.textContent = `You selected : ${answer2.textContent}`;
userAnswers[level] = answer2.textContent
text[level] = yourAnswer.textContent

}

function checkRightAnswer3(){
    yourAnswer.textContent = `You selected : ${answer3.textContent}`;
userAnswers[level] = answer3.textContent
text[level] = yourAnswer.textContent

}

function checkRightAnswer4(){
    yourAnswer.textContent = `You selected : ${answer4.textContent}`;
userAnswers[level] = answer4.textContent
text[level] = yourAnswer.textContent
}




function NEXTfUNCTION (){
    progres.textContent = `Level : ${level + 2}/20`
 yourAnswer.textContent = text[level +1]

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

 answer1.textContent = allQuestionAnswers[level + 1][rananswer1] ;
 answer2.textContent = allQuestionAnswers[level + 1][rananswer2];
 answer3.textContent = allQuestionAnswers[level + 1][rananswer3];
 answer4.textContent = allQuestionAnswers[level + 1][rananswer4];

if(level == 0){
    back.style.display="block"
}
if(level == -1 || 0){
    back.style.display="none"
}
if(level == 18){
    next.style.display="none"
    finsh.style.display="block"
}

level++
    rananswer1 = Math.floor(Math.random() * 4);
    rananswer2 = Math.floor(Math.random() * 4);
    rananswer3 = Math.floor(Math.random() * 4);
    rananswer4 = Math.floor(Math.random() * 4);
    random()

console.log(rananswer1,rananswer2,rananswer3,rananswer4)
}









function BACKfUNCTION (){
        yourAnswer.textContent = text[level - 1]
    level--
        progres.textContent = `Level : ${level +1}/20`

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
if (level == 0){
    back.style.display="none"
}
}

function FINSHfUNCTION(){
    theResult.style.visibility="visible";
for (let i = 0; i < answerList.length ; i++){
    if(userAnswers[i]== answerList[i]){
        rightAnswers++
        correct.textContent = `correct answers : ${rightAnswers}`
    }else{
        wrongAnswers++
        wrong.textContent = `wrong answers : ${wrongAnswers}`

    }
console.log(rightAnswers)

}
rightAnswers = 0;
wrongAnswers = 0;
}
