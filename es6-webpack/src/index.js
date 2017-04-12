
// cach 1: require javascript files
/* var variables = require('./variables.js');
variables("Hello world"); */

// cach 2: import module từ 1 file
/* import { speak } from './variables';
console.log(speak()); // => 'moo' */

// cach 3: import multi modules in one file
// 1. Demo CONST, LET DATA --------------------------
/*
import {
  PI as PIdata,
  speak as cowSpeak,
  eat as cowEat,
  drink as cowDrink,
  letVariables as letData
} from './variables'
console.log(PIdata);
console.log(cowSpeak());
// call Letdata
letData();
*/

// 2. DEMO TEMPLATE STRINGS-----------------------------------------
/* import {
  basic as basicTemplate,
  multiline as multiLine,
  multilineBreak as multilineBreak,
  multilineItems as multilineItems
} from './template'

basicTemplate();
multiLine();
multilineBreak();
multilineItems(); */

// 3. ARROW FUNCTION --------------------
import {
  basicArrow,
  mapAndArrow,
  mathFunc
} from './arrow'

basicArrow();
mapAndArrow();
mathFunc(2,5);










// end file
