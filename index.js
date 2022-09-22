
/* Creating two objects, hero and monster, with properties. */
const hero = {
   elementId: "hero", 
   name: "Wizard", 
   avatar: "images/wizard.png", 
   health: 60, 
   diceRoll: [3, 1, 4],
   diceCount: 3
}

const monster = {
   elementId: "monster", 
   name: "Orc", 
   avatar: "images/orc.png", 
   health: 10, 
   diceRoll: [4],
   diceCount: 1
}

function getDiceRollArray(diceCount) {
   const newDiceRoll = [];
   for (let i = 0; i < diceCount; i++) {
      newDiceRoll.push(Math.floor(Math.random() * 6) + 1);
   }
   return newDiceRoll;
}

/**
 * `getDiceHtml` takes a number of dice to roll, and returns a string of HTML that represents the dice
 * rolls.
 * @param diceCount - The number of dice to roll.
 * @returns An array of strings.
 */
function getDiceHtml(diceCount) {
   return getDiceRollArray(diceCount).map((diceRoll) => `
      <div class="dice">${diceRoll}</div>
   `).join("");
}

/**
 * It takes in a data object and uses it to render a character card
 * @param data - an object with the following properties:
 */
function renderCharacter(data) {

   /* Destructuring the data object. */
   const {elementId,name, avatar, health, diceRoll,diceCount } = data;
   
  /* Creating a new array of HTML elements. */
   const diceHTML = getDiceHtml(diceCount);
   

   document.getElementById(elementId).innerHTML =
   
       `<div class="character-card">

            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
               ${diceHTML}
            </div>

       </div>`
}

renderCharacter(hero);
renderCharacter(monster);