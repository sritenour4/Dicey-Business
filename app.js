let dieCounter = 1;

// store each Die you create in a global array
let dieArray = []; 

const container = document.createElement('main');
container.className = 'container';
document.body.appendChild(container);
const generateDieBtn = document.getElementById('generate-die-btn');


// Create a class named Die that represents a single die.
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(dieCounter);
        this.rendor();
        this.roll();
        
    }

    // method named roll that generates a random integer 1-6, sets the value property, and updates the div on the page with the new value.
    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);        
    }

    // addEvents () {
    //     this.div.addEventListener('mouseover', () => this.div.appendChild(this.value));
    //     this.div.addEventListener('mouseout', () => this.div.removeChild(this.value));
    //     this.div.addEventListener('click', () => this.div.style.backgroundColor = this.randomColor());
    //     this.div.addEventListener('dblclick', () => this.destroySomething());
    // }

    

    rendor() {
        this.div.className = 'die';
        this.div.id = dieCounter;
        container.appendChild(this.div);
    }
    
}

generateDieBtn.addEventListener('click', function () {
    new Die();    
    dieCounter++;
})


