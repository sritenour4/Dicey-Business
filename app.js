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
        dieArray.push(this);        
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

generateDieBtn.addEventListener('click', ()  => {
    new Die();        
    counter++;
})

rerollDieBtn.addEventListener('click', () => {    
    for(let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
})

sumDieBtn.addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    alert(`The sum of the die is ${sum}.`);
} )

// this.div.addEventListener('click', () => {
//     this.roll();
// })

// this.div.addEventListener('dblclick', () => {
    
// })