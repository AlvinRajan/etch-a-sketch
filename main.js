document.addEventListener("DOMContentLoaded", function(){
    createboard(16);
    console.log("hai")
})

function createboard(size){
    let board =document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for( i = 0; i < numDiv; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", div);
    }
}