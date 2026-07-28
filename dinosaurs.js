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
    "Which dinosaur is known as the 'King of the Dinosaurs'?",
    "Which dinosaur had three horns on its face?",
    "Which dinosaur had large plates along its back?",
    "Which dinosaur had a club-like tail?",
    "Which dinosaur had the longest claws of any known dinosaur?",
    "Which dinosaur had a long neck and was one of the tallest dinosaurs?",
    "Which dinosaur is famous for its sickle-shaped claw?",
    "Which dinosaur had a sail on its back?",
    "Which dinosaur had a duck-like bill?",
    "Which dinosaur had a dome-shaped skull?",
    "Which dinosaur had one of the longest bodies of any dinosaur?",
    "Which dinosaur was larger than Tyrannosaurus rex in length?",
    "Which dinosaur had two thin crests on its head?",
    "Which dinosaur had a long neck with up to 19 vertebrae?",
    "Which dinosaur was one of the fastest known dinosaurs?",
    "Which dinosaur had thumb spikes for defense?",
    "Which dinosaur had a large bony frill and horns?",
    "Which dinosaur is considered one of the closest non-avian relatives of birds?",
    "Which dinosaur had armor covering most of its body?",
    "Which dinosaur was one of the largest meat-eating dinosaurs ever discovered?"
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
let answerList = ["Tyrannosaurus Rex", "Triceratops", "Stegosaurus", "Ankylosaurus", "Therizinosaurus", "Brachiosaurus", "Velociraptor", "Spinosaurus", "Hadrosaurus", "Pachycephalosaurus", "Diplodocus", "Spinosaurus", "Dilophosaurus", "Mamenchisaurus", "Ornithomimus", "Iguanodon", "Triceratops", "Troodon", "Ankylosaurus", "Spinosaurus"];
let progres = document.getElementById("progres");
let allQuestionAnswers = [["Allosaurus", "Tyrannosaurus Rex", "Velociraptor", "Carnotaurus"], ["Triceratops", "Styracosaurus", "Protoceratops", "Pentaceratops"], ["Kentrosaurus", "Stegosaurus", "Ankylosaurus", "Iguanodon"], ["Euoplocephalus", "Ankylosaurus", "Stegosaurus", "Nodosaurus"], ["Therizinosaurus", "Deinonychus", "Velociraptor", "Troodon"], ["Diplodocus", "Brachiosaurus", "Apatosaurus", "Camarasaurus"], ["Troodon", "Deinonychus", "Velociraptor", "Utahraptor"], ["Suchomimus", "Baryonyx", "Spinosaurus", "Allosaurus"], ["Parasaurolophus", "Hadrosaurus", "Edmontosaurus", "Iguanodon"], ["Pachycephalosaurus", "Stegoceras", "Stygimoloch", "Dracorex"], ["Diplodocus", "Mamenchisaurus", "Apatosaurus", "Brachiosaurus"], ["Spinosaurus", "Carcharodontosaurus", "Allosaurus", "Giganotosaurus"], ["Dilophosaurus", "Ceratosaurus", "Allosaurus", "Coelophysis"], ["Brachiosaurus", "Diplodocus", "Mamenchisaurus", "Apatosaurus"], ["Gallimimus", "Ornithomimus", "Troodon", "Struthiomimus"], ["Iguanodon", "Parasaurolophus", "Maiasaura", "Ouranosaurus"], ["Styracosaurus", "Pentaceratops", "Triceratops", "Torosaurus"], ["Troodon", "Velociraptor", "Deinonychus", "Compsognathus"], ["Ankylosaurus", "Euoplocephalus", "Nodosaurus", "Stegosaurus"], ["Spinosaurus", "Giganotosaurus", "Carcharodontosaurus", "Mapusaurus"]];


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
