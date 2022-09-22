
/**
 * The first line of the function creates an array of diceCount zeros. The second line maps each zero
 * to a random number between 1 and 6
 * @param diceCount - The number of dice to roll.
 * @returns An array of random numbers between 1 and 6.
 */
function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(
      () => Math.floor(Math.random() * 6) + 1);
}

/* Creating two objects, hero and monster, with properties. */
const hero = {
   elementId: "hero", 
   name: "Wizard", 
   avatar: "images/wizard.png", 
   health: 60, 
   diceCount: 3
}

const monster = {
   elementId: "monster", 
   name: "Orc", 
   avatar: "images/orc.png", 
   health: 10, 
   diceCount: 1
}


/* Creating a new class called Character. */
class Character {
   constructor(data) {

     /* Assigning the properties of the data object to the new instance of the Character class. */
      Object.assign(this, data);
     
      /* method called getDiceHtml, which is a function that takes a parameter
      called diceCount. */
      this.getDiceHtml = (diceCount) => {
            return getDiceRollArray(diceCount).map((num) => `
            <div class="dice">${num}</div>
         `).join("");
      }

      /* method called getHealthHtml */
      this.getCharacterHtml = () => {

         /* Destructuring the data object. */
         const { elementId, name, avatar, health, diceCount } = this;

         /* Creating a new array of HTML elements. */
         const diceHTML = this.getDiceHtml(diceCount);

         return `
            <div class="character-card">

               <h4 class="name"> ${name} </h4>
               <img class="avatar" src="${avatar}" />
               <div class="health">health: <b> ${health} </b></div>
               <div class="dice-container">
                  ${diceHTML}
               </div>

            </div>
         `;
      };
   }
}

/* Creating two new instances of the Character class. */
const wizard = new Character(hero)
const orc = new Character(monster)

/* Creating a new function called renderCharacters. */
function render() {
   document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
   document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}
/* Calling the render function. */
render();


