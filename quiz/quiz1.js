const start_btn=document.querySelector(".Start_quiz");
const quiz_box =document.querySelector(".quiz-box");
const que_text =document.querySelector(".que-text");
const options_box=quiz_box.querySelector(".options");
const next_btn=document.querySelector(".next-btn");
const correct='<i class="fa fa-check"></i>';
const wrong='<i class="fa fa-times"></i>';
const total_que=document.querySelector(".total_que");
const count_que=document.querySelector(".count_que");
const result=document.querySelector(".result-box");

const total_que_r=document.querySelector(".total-que span");
const right_ans_r=document.querySelector(".right-ans span");
const wrong_ans_r=document.querySelector(".wrong-ans span");
const percentage=document.querySelector(".percentage span");

const again_quiz=document.querySelector(".result-footer .quiz-again");
const exit=document.querySelector(".exit");

start_btn.onclick=()=>{
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");
}

total_que.innerText=questions.length;
total_que_r.innerText=questions.length;

var que_index=0;
var right_answers =0;
var wrong_answers=0;
count_que.innerText=que_index+1;
showQuestion(que_index);

function showQuestion(que_index){
    que_text.innerText = questions[que_index].num+". "+questions[que_index].question;
var option_statement="";
for(var i=0;i<questions[que_index].options.length;i++){
  option_statement +=`<div class="option">${questions[que_index].options[i]} </div>`
}
options_box.innerHTML = option_statement;

 var Alloptions=options_box.querySelectorAll(".option");
 for (var j =0 ;j <Alloptions.length;j++){
    Alloptions[j].setAttribute("onclick","UserAnswer(this)")
 }
 next_btn.classList.add("inactive");
 
} 
next_btn.onclick=()=>{
    que_index++;
   
    if (questions.length>que_index) {
        count_que.innerText=que_index+1;
        showQuestion(que_index);
    }
    else{
        console.log("question completed");
        quiz_box.classList.add("inactive");
        result.classList.remove("inactive");
        right_ans_r.innerText=right_answers;
        wrong_ans_r.innerText=wrong_answers;
        percentage.innerText=((right_answers*100)/questions.length).toFixed(2)+"%";
        
    }
    if(questions.length-1==que_index){
        next_btn.innerText="Finish";
    }
}
function UserAnswer(answer){
    let userans= answer.innerText;
    let correctAns= questions[que_index].answer;
    var Alloptions2=options_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive");
    if(userans== correctAns){
        console.log("%c right ans","color:green");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",correct);
        right_answers++;
       
    } else{
        console.log("%c wrong ans","color:red");
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend",wrong);
        wrong_answers++;
        for(var i=0;i<Alloptions2.length;i++){
            if(Alloptions2[i].innerText==correctAns){
               Alloptions2[i].classList.add("correct");
               Alloptions2[i].insertAdjacentHTML("beforeend",correct);
            }
        }

    }

 var Alloptions2=options_box.querySelectorAll(".option");
    for (var j =0 ;j <Alloptions2.length;j++){
        Alloptions2[j].classList.add("disabled");
}
}
again_quiz.onclick=()=>{
    quiz_box.classList.remove("inactive");
    result.classList.add("inactive");
   reset();
}
exit.onclick=()=>{
    start_btn.classList.remove("inactive")
    result.classList.add("inactive");
    reset();
}
function reset(){
    que_index=0;
     right_answers =0;
 wrong_answers=0;
 next_btn.innerText="Next question";
count_que.innerText=que_index+1;
showQuestion(que_index);
}
