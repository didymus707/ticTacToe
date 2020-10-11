import * as logic from './logic.js';
import * as game from './game.js';

logic.welcome();

function players() {
  while (game.gameBoard.tile.length > 0) {
    logic.selectPlayer();
  }
}
