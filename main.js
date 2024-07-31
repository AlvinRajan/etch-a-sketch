let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createboard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "you can draw";
            }
            else{
                draw.innerHTML ="not allowed"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size =getSize();
        createboard(size);
    })
})

function createboard(size){
    let board =document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for( i = 0; i < numDiv; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Enter the size of board ?")
    let message =document.querySelector("#message");
    if(input == ""){
        message.innerHTML ="please provide a number";
    }else if(input  < 0 || input > 100){
        message.innerHTML ="enter number between 1 to 100";
    }else{
        message.innerHTML ="now you can play";
        return input;
    }
}

function colorDiv(){
    if(click){
        if( color =="random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }else{
            this.style.backgroundColor = `black`
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetboard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor= "white")
}