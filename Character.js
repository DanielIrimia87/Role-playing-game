// Path: Character.js

/* Importing the functions from the utils.js file. */
import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"; 

/* Creating a new class called Character. */
class Character {
   constructor(data) {

      /* Assigning the properties of the data object to the new instance of the Character class. */
      Object.assign(this, data);

      /* Creating a new property called maxHealth and assigning it the value of the health property. */
      this.maxHealth = this.health;
      
      /* Calling the getDicePlaceholderHtml function and passing in the diceCount property of the
      Character class. */
      this.diceArray = getDicePlaceholderHtml(this.diceCount);
    
    
      this.getDiceHtml = () => {
       this.currentDiceScore = getDiceRollArray(this.diceCount);
       
       this.diceArray = this.currentDiceScore.map(num => {
          return `<div class="dice">${num}</div>`;
         }).join('');
      }
      
      this.takeDamage = (attackScoreArray) =>{
         
         const totalAttackScore = attackScoreArray.reduce( (total, num) => total + num);
         this.health -= totalAttackScore;
         
         if (this.health <= 0) {
            this.dead = true;
            this.health = 0; 
         } 
      }
      
      this.getHealthBarHtml = () => {
         const percent = getPercentage(this.health, this.maxHealth);

         return `
            <div class="health-bar-outer">
               <div class="health-bar-inner ${ percent < 26 ? 'danger' : ''}" 
                  style="width: ${percent}%;">
               </div>
            </div>
         `
      }

      /* method called getHealthHtml */
      this.getCharacterHtml = () => {

         /* Destructuring the data object. */
         const { name, avatar, health, diceArray } = this;

         const healthBar = this.getHealthBarHtml();

         return `
            <div class="character-card">

               <h4 class="name"> ${name} </h4>
               <img class="avatar" src="${avatar}"/>

               <div class="health">health: <b> ${health} </b></div>
               ${healthBar}

               <div class="dice-container">
                  ${this.diceArray}
               </div>
         </div>`
      };
      
   }
}

export default Character;