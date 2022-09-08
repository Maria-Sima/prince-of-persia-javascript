/*
    Implement the functions below so that the prince can
    reach his beloved princess.

    HINT: use the BROWSER DEVELOPER TOOLS.
*/

let areKeysSwitched = false;

function getStairsMovementDirection(stairNumber, isClimbingStairs) {
    /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "stairNumber" and "isClimbingStairs"
       so that prince will descend and ascend the stairs.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the stair number can be divided by a certain number
    */
    if (stairNumber % 2 == 1)
    {
        return "right";
    }
    if (stairNumber % 2 == 0){
        if(isClimbingStairs) return "up";
        else return "down";
    }
}

function getZigZagMovementDirection(step) {
    /* Implement the function to return "left", "right", "up", "down"
       based on the values of the parameters "step" so that prince will reach the keyboard symbol on the map.
       HINT: to avoid writing a lot of if else, if else, if else...
       you can see if the step can be divided by a certain number for "up" and another number for "down"

      */
    if (step % 3 == 0){
        if(step%2==0) return "up";
        else return "down";
    }
    else return "right"
}

function manuallyControl(key) {
    // when moving the prince using the keyboard you can call the already implemented
    // function `moveDirection` with the STRING as PARAMETER `left`, `right`, `up`, `down`.
    console.log(`[manuallyControl] received key pressed: ${key}`)
    
    if(key==="KeyQ" && !areKeysSwitched) areKeysSwitched = true;
    else if (key === "KeyQ" && areKeysSwitched) areKeysSwitched = false;


    if(!areKeysSwitched)
    {
        switch(key)
        {
            case 'ArrowUp': 
                moveDirection('up');
                break;
            case 'ArrowDown':
                moveDirection('down');
                break;
            case 'ArrowRight': 
                moveDirection('right');
                break;
            case 'ArrowLeft':
                moveDirection('left');
                break;
        }
    }else{
        switch(key){
            case 'KeyW': 
                moveDirection('up');
                break;
            case 'KeyS':
                moveDirection('down');
                break;
            case 'KeyD': 
                moveDirection('right');
                break;
            case 'KeyA':
                moveDirection('left');
                break;
        }  
    }

}

function givePotion2Answer(list) {
    let sum = 0;
    for(let i of list){
        if(i%2 == 0){
            sum += i
        }
    }
    return sum;
}

function givePotion3Answer(list){
    let max=list[0];
    for (let i of list) {
        if (i >= max) 
        max = i; 
    }
    return max;
  }

  function givePotion12Answer(list){
    let sum = 0;
    for(let i of list){
        if(i<0) i=-i;
        sum=sum + i;
    }

    return sum;
    
  }

  function givePotion6Answer(list) {
    list = list.split("*");
    let sum = 0;
    // if there are potion, return the list///////////)
  
    for (let i of list) {
      console.log(list[i], list, i);
      if (i != "") sum = sum + parseInt(i);
    }
  
    return sum;
  }


  function givePotion10Answer(letterToFind, letters) {
    let x= letters.length;
    let s=-1;
    for(var i=0; i<x; i++){
        if(letterToFind==letters[i])
        s=i;
    }
    return s;
   
}
function givePotion5Answer(hours, minutes, seconds, secondsToAdd) {
    let secondsTotal = seconds + secondsToAdd;
    if(secondsTotal>=60){
        seconds=secondsTotal%60;
        minutes++ ;

    };

    if(minutes>=60){
        minutes=minutes%60;
        hours++ ;

    };

    if(hours>=24){
        let hours = 0;

    };
    let finalTime = `${hours}:${minutes}:${seconds}` ;
return finalTime;

}
function givePotion8Answer(number) {
    if(number%number==0) return true;
    else return false;
}


function givePotion4Answer(list, test) {
    console.log(list[0])
    console.log(test)
    let result = ""
    for(let i=0; i<list.length; i++) {
        for(let x=0; x<test.lenght; x++){
            if(list[i]==test[x]) {
                list[i] = list[i].toUpperCase();
            }  
            
                result += list[i];
            
        }

    }
        return result;

  }

  function givePotion9Answer(list) {
	
	let smallest = list[0];
	let secondSmallest = list[0];
	
	for (let i = 0; i < list.length; i++) {
		
		if (list[i] < smallest) {
			secondSmallest = smallest;
			smallest = list[i];
		}
		
	}
	
	return smallest + secondSmallest;
}
function givePotion11Answer(list, letterToReplace, letterToPutInstead){
    return list.split(letterToReplace).join(letterToPutInstead)
}