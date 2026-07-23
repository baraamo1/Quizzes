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
    "Which brand makes the iPhone?",
    "Which brand created Windows?",
    "Which brand owns Instagram?",
    "Which brand makes PlayStation?",
    "Which brand created Android?",
    "Which brand makes the Galaxy phones?",
    "Which brand owns YouTube?",
    "Which brand makes the Switch console?",
    "Which brand created the Xbox?",
    "Which brand makes Air Jordan shoes?",
    "Which brand has the slogan 'Just Do It'?",
    "Which brand has a bitten apple logo?",
    "Which brand created ChatGPT?",
    "Which brand makes Photoshop?",
    "Which brand owns WhatsApp?",
    "Which brand created the Chrome browser?",
    "Which brand makes the Kindle?",
    "Which brand owns LinkedIn?",
    "Which brand created TikTok?",
    "Which brand makes the Surface laptop?"
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
let answerList = ["Apple", "Microsoft", "Meta", "Sony", "Google", "Samsung", "Meta", "Nintendo", "Microsoft", "Nike", "Nike", "Apple", "OpenAI", "Adobe", "Meta", "Google", "Amazon", "Microsoft", "ByteDance", "Microsoft"];
let progres = document.getElementById("progres");
let allQuestionAnswers = [["Apple", "Samsung", "Google", "Huawei"], ["Microsoft", "Apple", "Google", "IBM"], ["Meta", "Snap", "Google", "X"], ["Sony", "Nintendo", "Microsoft", "Sega"], ["Google", "Microsoft", "Apple", "Yahoo"], ["Samsung", "Apple", "Xiaomi", "Huawei"], ["Meta", "Google", "Microsoft", "TikTok"], ["Nintendo", "Sony", "Sega", "Atari"], ["Microsoft", "Sony", "Nintendo", "Valve"], ["Nike", "Adidas", "Puma", "Reebok"], ["Puma", "Nike", "Adidas", "Under Armour"], ["Samsung", "Apple", "Google", "Microsoft"], ["OpenAI", "Google", "Anthropic", "Meta"], ["Adobe", "Corel", "Canva", "Autodesk"], ["Google", "Meta", "Telegram", "Apple"], ["Mozilla", "Opera", "Google", "Microsoft"], ["Amazon", "eBay", "Alibaba", "Walmart"], ["Google", "Microsoft", "Apple", "IBM"], ["ByteDance", "Tencent", "Meta", "Google"], ["Dell", "Microsoft", "HP", "Lenovo"]];


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
