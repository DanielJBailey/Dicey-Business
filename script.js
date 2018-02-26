let diceArray = [];
let idNumber = 0;


//create array to convert value to class name
let valueArray = [];
valueArray[1] = "one";
valueArray[2] = "two";
valueArray[3] = "three";
valueArray[4] = "four";
valueArray[5] = "five";
valueArray[6] = "six";

class die {
    constructor(value) {
        //assign value to object
        this.value = value;
        //roll to get value
        this.roll();
        //create div for dice
        this.div = $('<div class=dice></div>');
        //assign class for dice based on value number
        this.div.attr("class", valueArray[this.value]);
        //get dice container id from html
        let diceContainer = $('#dice-container');
        //append dice to container
        diceContainer.append(this.div);
        //create for loop to add dots to dice
        for (let i = 0; i < this.value; i++) {
            let dot = document.createElement('div');
            dot.className = 'dot';
            this.div.append(dot);
        }
    //assign id number to div
    this.id = idNumber;
    this.div.attr("id", this.id);

//click function to re roll dice and assign new class
    this.div.click ( () => {
        this.div.removeClass(this.div.attr("class")); //remove current class on click
    this.div.empty();   //empty current dots off div
    this.roll();    //roll for new value
    this.div.addClass(valueArray[this.value]);  //add class for new array
    //generate new dots on die
    for (let i = 0; i < this.value; i++) {
    let dot = document.createElement('div');
    dot.className = 'dot';
    this.div.append(dot);}
});

this.div.dblclick( () => {
    console.log('clicked!');      
});

        }//end constructor

        roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
        }  

        

}//end die object

    //establish buttons   
let button = $('#btn');
let rollDice = $('#roll');
let sumDice = $('#sum');

    //create die on click
button.click ( () => {
let d = new die();
diceArray.push(d);
idNumber++;
console.log(diceArray);
})
    //sum values on click
sumDice.click(sum);

    //function to add value of all die
function sum () {
let total = 0;
for (let i = 0; i < diceArray.length; i++) {
total += diceArray[i].value;
}
    alert(`The total sum of the die on page is: ${total}`);
};




