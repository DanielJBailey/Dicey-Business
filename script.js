dice_array = []; //array for storing each dice
id_number = 0; //starting vaue for id
let container = $('#dice-container'); //get container



//begin die class
class die {
    constructor (value) {
        this.value = value;
        this.roll();//rolls for value
        this.id = id_number;
        this.div = $(`<div class=dice></div>`);
        this.div.attr("id", this.id);
        this.div.append(this.dieValue());//add die value to div
        container.append(this.div);
        //changes value on click
        this.div.click( () => {
            this.roll();
            this.div.empty().html(this.dieValue());
        })
        this.div.dblclick(() => {
            this.removeDie();//remove upon double clicking
        })
    }

    //sets value to a random number 1-6
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }

    //sets each value to the unicode equiv. for dice faces
    dieValue (unicode) {
        if (this.value === 1) {
            unicode = '&#9856;';
            return unicode;
        } else if (this.value === 2) {
            unicode = '&#9857;';
            return unicode;
        } else if (this.value === 3) {
            unicode = '&#9858;';
            return unicode;
        } else if (this.value === 4) {
            unicode = '&#9859;';
            return unicode;
        } else if (this.value === 5) {
            unicode = '&#9860;';
            return unicode;
        } else if (this.value === 6) {
            unicode = '&#9861;';
            return unicode;
        }
    }
    //remove die function
    removeDie() {
        $(`#${this.id}`).remove();//selects this id to remove
        let index = dice_array.findIndex(dice => dice.id === this.id) //sets index value for die to be removed from array
        dice_array.splice(index, 1); //removes die
    }

}

let addDice = $('#add'); //add button
let rollDice = $('#roll'); //roll die button
let sumDice = $('#sum'); //total up values


//add dice on click function
addDice.click( () => {
    let d = new die();
    dice_array.push(d);
    id_number++;
})
//call sum on click
sumDice.click(sum);

//sum all values function
function sum () {
    let total = 0;
    for (let i = 0; i < dice_array.length; i++) {
        total += dice_array[i].value
    }
    alert (`The total for all the dice rolled is ${total}`);
}

//roll all die function
rollDice.click( () => {

    for (let i = 0; i < dice_array.length; i++) {
        dice_array[i].roll();
        $(`#${i}`).html(dice_array[i].dieValue());
    }

})