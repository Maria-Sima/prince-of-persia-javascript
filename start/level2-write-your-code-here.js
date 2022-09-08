/*
    Implement the function `level2Move` below so that the prince can
    reach his beloved princess.

    The 'level2Move' will be called until your pass to the next level,
    so you should write any movement code in this function.
    
    You can move the prince through the:
    moveDirection('left')
    moveDirection('up')
    moveDirection('right')
    moveDirection('down')

    HINT: use the BROWSER DEVELOPER TOOLS.
*/
function moveDown(direction){
   moveDirection('down');
}
function moveRight(direction){
    moveDirection('right');
 }
 function moveUp(direction){
    moveDirection('up');
 }
 function moveLeft(direction){
    moveDirection('left');
 }

let upMove = false;
let rightMove = false;
let leftMove = false;
let downMove = false;

function level2Move(elementLeftOfPrince, elementRightOfPrince, elementUpOfPrince, elementDownOfPrince) {
    // the prince should move down first, the problem is that the amount
    // of times to move changes from one level to another. Try to find out
    // based on the variables "elementLeftOfPrince", "elementRightOfPrince",
    // "elementUpOfPrince", "elementDownOfPrince"
    while (elementDownOfPrince!==13 && downMove==false && rightMove==false) 
        return moveDown();
    if(elementDownOfPrince==13)
        downMove = true;
    
    while(elementRightOfPrince!==13 && downMove==true && rightMove==false)
        return moveRight();
    if(elementRightOfPrince==13)
            rightMove = true;
    
    while(elementUpOfPrince!==13 && downMove==true && rightMove==true && upMove==false)
        return moveUp();
    if (elementUpOfPrince==13)
        upMove = true;
    //zigzag
    while(elementLeftOfPrince!==13 && downMove==true && rightMove==true && upMove==true && leftMove==false)
        return moveLeft();
    if (elementLeftOfPrince==13)
        leftMove =false;

    while(elementLeftOfPrince==13 && elementDownOfPrince==13 && downMove==true && rightMove==true && upMove==true && leftMove==false)
        return moveUp();
    if (elementUpOfPrince==13 && elementRightOfPrince==13)
            upMove = true;

    while(elementLeftOfPrince==13 && elementUpOfPrince==13 && downMove==true && rightMove==true && upMove==true && leftMove==false)
        return moveDown();
    if (elementLeftOfPrince==13 && elementDownOfPrince==13)
        downMove = false;
        rightMove = true;
    //princess

    while(elementDownOfPrince == 11 || elementDownOfPrince ==99 && elementRightOfPrince ==11){
        if(elementDownOfPrince==11 || elementDownOfPrince==99){
            downMove = true;
            rightMove = false;
            return moveDown();
        }
        if(downMove == true && rightMove == false) return moveRight();
    }

    


        

     

    
    

    

    // the prince should move right second, the problem is that the amount
    // of time to move changes from one level to another
    // HINT: try to create a function that would receive the parameters
    // up/down/left/right and the amount of times to move


    // the prince should move up third, the problem is that the amount
    // of time to move changes from one level to another
    // HINT: try to create a function that would receive the parameters
    // up/down/left/right and the amount of times to move

    // the prince should move in a zig-zag pattern. Unfortunately the amount
    // of times changes from one level to another
    // HINT: try to create a function that would receive the parameters

    // to finally reach the princess the prince should move down and sometimes
    // to left or right, depending on the level
}

