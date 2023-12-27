let boxes = document.querySelectorAll(".box");
let resetbuttons = document.querySelectorAll(".reset-btn");
let message = document.querySelector("#message");
let msgdiv = document.querySelector(".msg");
let turn0 =  true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else {
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

resetbuttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        reset();
    })
})

const reset = ()=>{
    turn0=true;
    enaablebtns();
    msgdiv.classList.add("hide")
}

const disablebtns =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enaablebtns =()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    message.innerText = `Congrtulations, winner is ${winner}`;
    msgdiv.classList.remove("hide")
    disablebtns();

}

const checkWinner = ()=>{
    for(pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

