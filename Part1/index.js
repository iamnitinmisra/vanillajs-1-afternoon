let board = [];

function play(clickedId){
    
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    let topLeft = board[0];
    let topMiddle = board[1];
    let topRight = board[2];
    let middleLeft = board[3];
    let middle = board[4];
    let middleRight = board[5];
    let bottomLeft = board[6];
    let bottomMiddle = board[7];
    let bottomRight = board[8];
    let winMessage = " is the winner";
    let boardFull = false;
    
    if (playerSpan.innerText === "X"){
        playerSpan.innerText = "O";
        clickedElement.innerText = "X"
        board[clickedId] = 'X'
        console.log(board[clickedId])
    } 
    else{
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        board[clickedId] = 'O'
    };

    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
        alert(topLeft + winMessage)
    }
    if (middleLeft !== undefined && middleLeft === middle && middleLeft === middleRight){
        alert(middleLeft + winMessage)
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        alert(bottomLeft + winMessage)
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(topLeft + winMessage)
    }
    if (topMiddle !== undefined && topMiddle === middle && topMiddle === bottomMiddle){
        alert(topMiddle + winMessage)
    }
    if (topRight !== undefined && topRight === topLeft && topRight === topMiddle){
        alert(topRight + winMessage)
    }
    if (topLeft !== undefined && topLeft === middle && topLeft === bottomRight){
        alert(topLeft + winMessage)
    }
    if (topRight !== undefined && topRight === middle && topRight === bottomLeft){
        alert(topRight + winMessage)
    }

    for (i=0; i<9; i++){
        if (board[i]===undefined){
            boardFull=false;
        }
        else {boardFull=true;
        }
        
    }
    if (boardFull===true){
        alert("CAT's game")
    }

    console.log(board)
};