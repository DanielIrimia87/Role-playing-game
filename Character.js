// Path: Character.js

import characterData from "./data.js";
import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"; 

/* Creating a new class called Character. */
class Character {
    constructor(data) {
      /* Assigning the properties of the data object to the new instance of the Character class. */
       Object.assign(this, data);

       this.diceArray = getDicePlaceholderHtml(this.diceCount);
       
       this.getDiceHtml = () => {
          this.currentDiceScore = getDiceRollArray(this.diceCount);
          
          this.diceArray = this.currentDiceScore.map((num) => {
             return `<div class="dice">${num}</div>`;
            }).join('');
            
         }
         
       this.takeDamage = function(attackScoreArray) {
         
            const totalAttackScore = attackScoreArray.reduce((total, num) => total + num);
            this.health -= totalAttackScore;

            if (this.health <= 0) {
                  this.dead = true;
                  this.health = 0; 
               } 
       }

       /* method called getHealthHtml */
       this.getCharacterHtml = () => {
 
          /* Destructuring the data object. */
          const { name, avatar, health, diceCount, diceArray } = this;

          return `
             <div class="character-card">
 
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                   ${diceArray}
                </div>
 
             </div>
          `;
       };
    }
}

export default Character;