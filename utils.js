// Path: utils.js

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

/**
 * It returns a string of HTML that contains a number of placeholder dice equal to the number passed
 * in.
 * @param diceCount - The number of dice to display.
 * @returns A string of HTML that contains a placeholder for each dice.
 */
function getDicePlaceholderHtml(diceCount) {
      return new Array(diceCount).fill(0).map(
         () => `<div class="placeholder-dice"></div>`).join(" ");
}
   
export {getDiceRollArray, getDicePlaceholderHtml};
