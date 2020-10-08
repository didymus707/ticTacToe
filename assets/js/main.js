const gameModule = (() => {
  import * as game from './game.js';
  
  return game;
})();

console.log(game.gameBoard.board);
const player1 = game.player('Javier');
function someFunction() {
  console.log(player1.getName());
}
