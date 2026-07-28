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
    "What is 2 + 3?",
    "What is 10 - 4?",
    "What is 5 × 6?",
    "What is 36 ÷ 6?",
    "What is 9 × 8?",
    "What is 15 + 28?",
    "What is 84 ÷ 7?",
    "What is 12²?",
    "What is the square root of 196?",
    "What is 17 × 9?",
    "What is 125 ÷ 5?",
    "What is 18²?",
    "What is the cube of 5?",
    "What is 144 ÷ 12 + 8 × 2?",
    "What is 25% of 200?",
    "What is 3⁴?",
    "If a triangle has angles of 50° and 60°, what is the third angle?",
    "What is the value of π rounded to 2 decimal places?",
    "Solve: 7 × (12 - 5) + 9",
    "What is the square root of 2025?"
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
let answerList = ["5", "6", "30", "6", "72", "43", "12", "144", "14", "153", "25", "324", "125", "28", "50", "81", "70", "3.14", "58", "45"];
let progres = document.getElementById("progres");
let allQuestionAnswers = [["4", "5", "6", "7"], ["5", "6", "7", "8"], ["25", "30", "35", "40"], ["5", "6", "8", "9"], ["64", "72", "81", "90"], ["42", "43", "44", "45"], ["11", "12", "14", "16"], ["121", "144", "169", "196"], ["12", "13", "14", "15"], ["144", "153", "162", "171"], ["20", "24", "25", "30"], ["289", "324", "361", "400"], ["64", "125", "216", "343"], ["26", "28", "30", "32"], ["25", "40", "50", "75"], ["64", "81", "100", "125"], ["60", "70", "80", "90"], ["3.12", "3.14", "3.16", "3.18"], ["49", "56", "58", "63"], ["40", "42", "44", "45"]];


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
