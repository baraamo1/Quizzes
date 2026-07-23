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
    "Which country speaks Portuguese as its official language?",
    "Which language is mainly spoken in Brazil?",
    "Which language uses Hiragana and Katakana?",
    "Which language is written with Hangul?",
    "Which language is mainly spoken in Austria?",
    "How many countries speak French as an official language?",    "Which language uses the Cyrillic alphabet?",
    "Which language is mainly spoken in Argentina?",
    "Which country speaks Swedish as its official language?",
    "Which language is mainly spoken in Iran?",
    "How many countries have English as an official language?",    "Which language is mainly spoken in Egypt?",
    "Approximately how many languages are spoken in the world?",
    "Which language is considered the most famous dead language?",
    "Which is the most widely spoken language in the world?",  
    "Which country has the highest number of languages?",
    "Which language is mainly spoken in Israel?",
    "Which country speaks Vietnamese as its official language?",
    "Which language is mainly spoken in Turkey?",
    "Which language is mainly spoken in South Korea?"
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
let answerList = ["Portuguese", "Portuguese", "Japanese", "Korean", "German", "29", "Russian", "Spanish", "Swedish", "Persian", "67", "Arabic", "About 7,000", "Latin", "English", "Hungarian", "Hebrew", "Vietnamese", "Turkish", "Korean"];
let progres = document.getElementById("progres");
let allQuestionAnswers = [["Spanish", "Portuguese", "French", "Italian"], ["Portuguese", "Spanish", "French", "Italian"], ["Chinese", "Japanese", "Korean", "Thai"], ["Japanese", "Chinese", "Korean", "Vietnamese"], ["German", "Dutch", "Swedish", "Danish"], ["1", "25","29", "17"], ["Russian", "Ukrainian", "Bulgarian", "Serbian"], ["Portuguese", "Spanish", "Italian", "French"], ["Swedish", "Norwegian", "Danish", "Finnish"], ["Persian", "Arabic", "Turkish", "Urdu"], ["24", "34", "67", "55"], ["Arabic", "Hebrew", "Persian", "Turkish"], ["About 7,000", "About 3,000", "About 5,000", "About 10,000"], ["Latin", "Ancient Egyptian", "Sanskrit", "Old Norse"], ["English", "Mandarin Chinese", "Spanish", "Hindi"], ["India", "Indonesia", "Nigeria", "Papua New Guinea"], ["Hebrew", "Arabic", "Yiddish", "Aramaic"], ["Vietnamese", "Thai", "Chinese", "Khmer"], ["Turkish", "Arabic", "Persian", "Greek"], ["Korean", "Japanese", "Chinese", "Mongolian"]];


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
