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
let quiz = true;
//console.log(rananswer1,rananswer2,rananswer3,rananswer4)
//function randomAnswer (){
    








 if(rananswer2 == rananswer1){
    if(rananswer1 == 0){
        rananswer1++
    }else if(rananswer1 == 1){
        rananswer1 - 1 || rananswer1 ++ || rananswer1 +2
    }else if(rananswer1 == 2){
        rananswer1 - 2 || rananswer1 - 1 || rananswer1 ++
    }else if(rananswer1 == 3){
        rananswer1 - 3 || rananswer1 - 2 || rananswer1 - 1
    }
 }





    if(rananswer1 == 0){
        answer1.textContent = "Giraphe"
    }else if(rananswer1 == 1){
        answer2.textContent = "Bear"
    }else if(rananswer1 == 2){
        answer3.textContent = "Lion"
    }else if(rananswer1 == 3){
        answer4.textContent = "Elephant"
    }


 

  
    
 

  
    
 

    if(rananswer2 == 0 && rananswer2 != rananswer1){
        
        answer1.textContent = "Bear"
    }else if(rananswer2 == 1 && rananswer2 != rananswer1){
        answer2.textContent = "Lion"
    }else if(rananswer2 == 2 && rananswer2 != rananswer1){
        answer3.textContent = "Elephant"
    }else if(rananswer2 == 3 && rananswer2 != rananswer1){
        answer4.textContent = "Giraphe"
    }




console.log(rananswer1,rananswer2)
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