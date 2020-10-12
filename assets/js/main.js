// eslint-disable-next-line import/extensions
import * as logic from './logic.js';

logic.welcome();

function players() {
  logic.selectPlayer();
}

document.getElementById('start').addEventListener('click', players);
