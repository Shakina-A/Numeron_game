var num1box=document.getElementById("leftNumber");
var num2box=document.getElementById("rightNumber");

var timer=document.getElementById("timer");

var score=0;
var time=5;
 
var number1=Math.round(Math.random()*100);
var number2=Math.round(Math.random()*100);

num1box.innerHTML=number1;
num2box.innerHTML=number2;

function checkRelation(operator) {
    if (
        (operator === '>' && number1 > number2) ||
        (operator === '=' && number1 === number2) ||
        (operator === '<' && number1 < number2)
    ) {
        score++;
        resetTime(timerid);
    } else {
        location.href = "./gameover.html?score="+score;
        return;
    }

    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);

    num1box.innerHTML = number1;
    num2box.innerHTML = number2;
}

var timerid;//used to reset the timer

function starttimer(){
    time=5;
    timer.innerHTML=time;

    //running of timer
    timerid=setInterval(()=>{
        time--;
        if(time==0) location.href="./gameover.html?score="+score;
        timer.innerHTML=time;
    },1000);//1000ms=1sec---->this makes it to run for every second
}

function resetTime(inttervalid){
    clearInterval(inttervalid);
    starttimer();
}

starttimer();

