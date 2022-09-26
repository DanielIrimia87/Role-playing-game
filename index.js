// Path:index.js  

import characterData from './data.js'
import Character from './Character.js'

/**
 * The attack function rolls the dice for the wizard and the orc, then renders the results of the
 * attack
 */
function attack() {

    wizard.getDiceHtml()
    orc.getDiceHtml()

    wizard.takeDamage( orc.currentDiceScore )
    orc.takeDamage( wizard.currentDiceScore )
    render()
    
    /* This is checking to see if either the wizard or the orc is dead. 
    If either is dead, it will call the endgame function. */
    if ( wizard.dead || orc.dead ) {
        endGame()
    }
}


/**
 * If the wizard and orc are both dead, display a message saying no victors. If the wizard is alive,
 * display a message saying the wizard wins. Otherwise, display a message saying the orc is victorious
 */
function endGame() {

   /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
   const endMessage = wizard.health === 0 && orc.health === 0 ? 
   'No victors - all creatures are dead' 
   : wizard.health > 0 ? 'Wizard Wins':
   'The Orc is Victorious'

   const endEmoji = wizard.health > 0 ? '🔮': '☠️' 

   document.body.innerHTML = `
       
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()