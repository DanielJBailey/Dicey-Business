
let valueArray = [];
    valueArray[1] = "one";
    valueArray[2] = "two";
    valueArray[3] = "three";
    valueArray[4] = "four";
    valueArray[5] = "five";
    valueArray[6] = "six";
    

class die {
    constructor(value) {
        this.value = value; //needs to be set to result of math.random number
    }

    roll() {
        let value = Math.floor((Math.random() * 6) + 1);
    }

 }//end dice object

 let button = document.getElementById('btn');

 button.addEventListener('click',() => {
    let dice = document.createElement('div');
    let value = Math.floor((Math.random() * 6) + 1); //create value to assign styling to dice
    dice.className = valueArray[value];
    let diceContainer = document.getElementById('dice-container')
    diceContainer.appendChild(dice);

    for (let i = 0; i < value ; i++) {
        let dot = document.createElement('div');
        dot.className = 'dot';
        dice.appendChild(dot);
    }
    //console.log(dice.className);
    
    

 })

 //click button
 //create button div
 //create multiple dots based on value generated
 //add div to dice container
 //add dots to dice div


