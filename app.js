// store each Die you create in a global array
let dieArray = []; 
let counter = 1;

const container = document.createElement('main');
container.className = 'container';
document.body.appendChild(container);

const generateDieBtn = document.getElementById('generate-die-btn');
const rerollDieBtn = document.getElementById('reroll-die-btn');
const sumDieBtn = document.getElementById('sum-die-btn');


// Create a class named Die that represents a single die.
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.rendor();                     
        this.roll();

        // The push() method adds one or more elements to the end of an array and returns the new length of the array.
        dieArray.push(this);    
              
        // Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
        this.div.addEventListener('click', () => this.roll());
        
        // Add a feature where double clicking on a die on the page causes that die to be removed from the page
        // Be careful to take appropriate measures so that the sumDice function still reports the correct sum after you delete a die. 
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
            let index = dieArray.indexOf(this);
            if(index !== -1) {
                dieArray.splice(index, 1);
            }
        })
    }

    // method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);   
        this.div.textContent = this.value;      
    }     

    rendor() {
        this.div.className = 'die';
        this.div.id = counter;       
        this.div.appendChild(this.value); 
        container.appendChild(this.div);
    } 
        
}

// Clicking the button should create a new Die object (thus causing a div to be added to the screen with a random number 1-6)
generateDieBtn.addEventListener('click', ()  => {
    new Die();        
    counter++;
})

// button which should call the roll method on all the dice, updating their values
rerollDieBtn.addEventListener('click', () => {    
    for(let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
})

// Create a sumDice function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
sumDieBtn.addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    alert(`The sum of the die is ${sum}.`);
} )

