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

export {getDiceRollArray};