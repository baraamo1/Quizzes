let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let next = document.getElementById("next");
let rightAnswers ;
let wrongAnswer ;
let selectedAnswer = "";
let rananswer1 = Math.floor(Math.random() * 4 )
let rananswer2 = Math.floor(Math.random() * 4 )
let rananswer3 = Math.floor(Math.random() * 4 )
let rananswer4 = Math.floor(Math.random() * 4 )

console.log(rananswer1,rananswer2,rananswer3,rananswer4)
//function randomAnswer (){
    let ans = [0 , 1 , 2 , 3]
    if(rananswer1 == ans[rananswer1] && rananswer2 == ans[rananswer2] &&rananswer3 == ans[rananswer3] && rananswer4 == ans[rananswer4]){
        console.log("yes")
    }
//}









/*
answer1.onclick = function(){


    selectedAnswer = "1";
    console.log(selectedAnswer);
}

answer2.onclick = function(){

    selectedAnswer = "2";
        console.log(selectedAnswer);

}
answer3.onclick = function(){

    selectedAnswer = "3";
        console.log(selectedAnswer);
}

answer4.onclick = function(){

    selectedAnswer = "4";
        console.log(selectedAnswer);

}



function checkRightAnswer(){

  if(selectedAnswer == "2"){
    rightAnswers ++;
    console.log("right")
  }
  else{
    wrongAnswer ++;
    console.log("wrong")
  }


}

*/