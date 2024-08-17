// Step 1 - When user press any key game will started

let gameSeq = [];
let userSeq = [];

let btns = ["yellow","green","red","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
        levelUp();
    }

    
});

// Step 2 - Button will flash and wait for the user response 
function btnFlash(btn){
    btn.classList.add("btnFlash");
    setTimeout(function(){
        btn.classList.remove("btnFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    //random button will flash 
    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

// Step 3 - 
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br> Press any Key to Start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress)
}