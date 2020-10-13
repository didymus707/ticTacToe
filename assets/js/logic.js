// eslint-disable-next-line import/extensions
import * as game from './game.js';

const welcome = () => {
  game.message.innerHTML = `Welcome to tic-tac-toe game<br>
                       <button id="start" type="button" class="bg-info text-white p-4 border-0 rounded">Start</button>`;
  game.gameBoard.displayBoard();
}

const selectPlayer = () => {
  game.message.innerHTML = `Player ${
    3 - game.gameBoard.tile.length
  } write a name and select a mark<br>
                       <input type="text" placeholder="Name" id="player-name" class="rounded border-0 my-2">`;
  const options = document.createElement('ul');
  for (let i = 0; i < game.gameBoard.tile.length; i += 1) {
    options.innerHTML += `<li id="${game.gameBoard.tile[i]}" class="mark-options list-inline-item p-3 rounded-circle text-white">${game.gameBoard.tile[i]}</li>`;
  }
  game.message.appendChild(options);
  for (let i = 0; i < game.optionsMark.length; i += 1) {
    // eslint-disable-next-line no-use-before-define
    game.optionsMark[i].addEventListener('click', createPlayer);
  }
}

function createPlayer() {
  const playerName = game.getName();
  const player = game.player(playerName, this.innerHTML);
  game.gameMatch.players.push(player);
  game.gameBoard.tile.splice(
    game.gameBoard.tile.findIndex((mark) => mark === player.markPlayer),
    1,
  );
  if (game.gameBoard.tile.length > 0) {
    selectPlayer();
  } else {
    // eslint-disable-next-line prefer-destructuring
    game.gameMatch.shift = game.gameMatch.players[0];
    game.gameMatch.startGame();
  }
}

export { welcome, selectPlayer, createPlayer };
