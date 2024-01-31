let boxes = document.body.querySelectorAll(".box");

let msg = document.body.querySelector("#msg");

let resetbtn = document.body.querySelector("#reset-btn");

let newbtn = document.body.querySelector("#newgame");

let msgcontainer = document.body.querySelector("#msg-container");


let flag_0=true;
let winning_combinations =[
    [0 , 1 , 2] ,
    [0 , 3 , 6] ,
    [0 , 4 , 8] ,
    [1 , 4 , 7] ,
    [2 , 5 , 8] ,
    [2 , 4 , 6] ,
    [3 , 4 , 5] ,
    [6 , 7 , 8] 
]


boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        if(flag_0 ==true)
        {
            box.innerText="O";
            flag_0 = false;
        }
        else{
            box.innerText="X";
            flag_0 = true;
        }
        box.disabled=true;
        checkpattern();
    })
    
});
const disabledboxes = (()=>{
    for(let b of boxes)
    {
        b.disabled = true;
    }
})
const enableboxes = (()=>{
    for(let bi of boxes)
    {
        bi.disabled=false;
        bi.innerText="";
    }
})
const showwinner = ((winner)=>{
    
    msg.innerText=`${msg.innerText}${winner}`;
    msgcontainer.style.display ="block"; 
    disabledboxes();
})
const checkpattern = (()=>{
    for(let pattern of winning_combinations)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 != "" && pos3 !="")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {

                showwinner(pos1);
            }
        }
    }
})

resetbtn.addEventListener("click" ,()=>{
    flag_0 = true;
    enableboxes();
    msgcontainer.style.display="none";
});
newbtn.addEventListener("click" ,()=>{
    flag_0 = true;
    enableboxes();
    msgcontainer.style.diplay="none";
    msg.style.display="none";
})