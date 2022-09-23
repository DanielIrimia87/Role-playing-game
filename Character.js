// Path: Character.js

import {getDiceRollArray} from "./utils.js"; 

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

export default Character;