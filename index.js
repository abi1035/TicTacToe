let decidePlayer=1;

var boxClick = function(e) {
    boxId=e.target.id;
    // console.log(e)
    let boardGameBox=document.getElementById(boxId)
    
    if(decidePlayer===10){
        console.log(true)
        removeClick()
    }else{
        if(boardGameBox.innerHTML===""){
            if(decidePlayer%2===0){
                boardGameBox.innerHTML=`<img src="images/circle.svg" alt="">`
                boardGameBox.setAttribute("value", "o");
                checkWinner()
            }else if(decidePlayer%2!=0){
                boardGameBox.innerHTML=`<img src="images/x.svg" alt="">`
                boardGameBox.setAttribute("value", "x");
                checkWinner()
            }
            decidePlayer++;
        }
    }
};


// Image not viable try adding value

function checkWinner(){
    let checkWhichBox=document.getElementsByClassName("box");
    // let xImg="<img src='images/x.svg' alt=''></img>"
    

    for(let i=0;i<checkWhichBox.length;i++){
        
        // console.log(checkWhichBox[i].getAttribute("value"))
        // if(checkWhichBox[0].getAttribute("value")==="x"){
        //     console.log(true)
        // }
        

        // check for x
        // vertical and horizontal
        // 1st row & column
        if(checkWhichBox[1].getAttribute("value")==="x" && checkWhichBox[4].getAttribute("value")==="x" && checkWhichBox[7].getAttribute("value")==="x" || checkWhichBox[0].getAttribute("value")==="x" && checkWhichBox[1].getAttribute("value")==="x" && checkWhichBox[2].getAttribute("value")==="x"){
            console.log(`x is winner`)
            document.getElementById("result").innerHTML=`X Wins!`
            removeClick()


        // 2nd row & column
        }else if(checkWhichBox[0].getAttribute("value")==="x" && checkWhichBox[3].getAttribute("value")==="x" && checkWhichBox[6].getAttribute("value")==="x" || checkWhichBox[3].getAttribute("value")==="x" && checkWhichBox[4].getAttribute("value")==="x" && checkWhichBox[5].getAttribute("value")==="x"){
            console.log(`x is winner`)
            document.getElementById("result").innerHTML=`X Wins!`
            removeClick()
        
        // 3rd row and column
        }else if(checkWhichBox[2].getAttribute("value")==="x" && checkWhichBox[5].getAttribute("value")==="x" && checkWhichBox[8].getAttribute("value")==="x" || checkWhichBox[6].getAttribute("value")==="x" && checkWhichBox[7].getAttribute("value")==="x" && checkWhichBox[8].getAttribute("value")==="x"){
            console.log(`x is winner`);
            document.getElementById("result").innerHTML=`X Wins!`
            removeClick()
        
        // Diagnol for x
        }else if(checkWhichBox[0].getAttribute("value")==="x" && checkWhichBox[4].getAttribute("value")==="x" && checkWhichBox[8].getAttribute("value")==="x" || checkWhichBox[2].getAttribute("value")==="x" && checkWhichBox[4].getAttribute("value")==="x" && checkWhichBox[6].getAttribute("value")==="x"){
            console.log("x is winner");
            document.getElementById("result").innerHTML=`X Wins!`
            removeClick()



        // check for o
        // vertical and horizontal
        // 1st row and column
        }else if(checkWhichBox[4].getAttribute("value")==="o" && checkWhichBox[1].getAttribute("value")==="o" && checkWhichBox[7].getAttribute("value")==="o" || checkWhichBox[0].getAttribute("value")==="o" && checkWhichBox[1].getAttribute("value")==="o" && checkWhichBox[2].getAttribute("value")==="o"){
            console.log(`o is winner`)
            document.getElementById("result").innerHTML=`O Wins!`
            removeClick()

        // 2nd row and column
        }else if(checkWhichBox[0].getAttribute("value")==="o" && checkWhichBox[3].getAttribute("value")==="o" && checkWhichBox[6].getAttribute("value")==="o" || checkWhichBox[3].getAttribute("value")==="o" && checkWhichBox[4].getAttribute("value")==="o" && checkWhichBox[5].getAttribute("value")==="o"){
            console.log(`o is winner`)
            document.getElementById("result").innerHTML=`O Wins!`
            removeClick()

        // 3rd row and column
        }else if(checkWhichBox[2].getAttribute("value")==="o" && checkWhichBox[5].getAttribute("value")==="o" && checkWhichBox[8].getAttribute("value")==="o" || checkWhichBox[6].getAttribute("value")==="o" && checkWhichBox[7].getAttribute("value")==="o" && checkWhichBox[8].getAttribute("value")==="o"){
            console.log(`o is winner`);
            document.getElementById("result").innerHTML=`O Wins!`
            removeClick()

        // Diagnol for o
        }else if(checkWhichBox[0].getAttribute("value")==="o" && checkWhichBox[4].getAttribute("value")==="o" && checkWhichBox[8].getAttribute("value")==="o" || checkWhichBox[2].getAttribute("value")==="o" && checkWhichBox[4].getAttribute("value")==="o" && checkWhichBox[6].getAttribute("value")==="o"){
            console.log("o is winner");
            document.getElementById("result").innerHTML=`O Wins!`
            removeClick()

        }

        
    
}
}


function removeClick(){
    let boxes=document.getElementsByClassName("box");
    for(let i=0;i<boxes.length;i++){
        boxes[i].removeAttribute("onclick");
    }
}


function resetGame(){
    let boxes=document.getElementsByClassName("box");
    for(let i=0;i<boxes.length;i++){
        boxes[i].setAttribute('onclick',"boxClick(event)");
        boxes[i].setAttribute('value',"");
        decidePlayer=1;
        console.log(decidePlayer)
        boxes[i].innerHTML=""
    }
    document.getElementById("result").innerHTML=`Welcome to Tic Tac Toe`
}