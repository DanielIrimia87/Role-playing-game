// Path:index.js  

import characterData from "./data.js"; 
import Character from "./Character.js";

/* Creating two new instances of the Character class. */
const wizard =  new Character(characterData.hero);
const orc =  new Character(characterData.monster);

/* Creating a new function called renderCharacters. */
function render() {
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
   document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}
/* Calling the render function. */
render();


