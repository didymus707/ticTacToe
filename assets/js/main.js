import * as game from './game.js';
import * as logic from './logic.js';

logic.welcome();

function players() {
  logic.selectPlayer();
};

document.getElementById('start').addEventListener('click', players);
