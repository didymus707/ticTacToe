import * as game from './game.js';

const message = document.getElementById('message');

function welcome() {
  message.innerHTML = `Welcome to tic-tac-toe game<br>
                       <button id="start" type="button">Start</button>`;
  game.gameBoard.displayBoard();
}

function selectPlayer() {
  message.innerHTML = `Player ${3 - game.gameBoard.tile.length} write a name and select a mark<br>
                       <input type="text" placeholder="Name" id="player-name"></input>`;
  const options = document.createElement('ul');
  for (let i = 0; i < game.gameBoard.tile.length; i += 1) {
    options.innerHTML += `<li onclick="logic.createPlayer(${game.gameBoard.tile[i]})" class="x list-inline-item p-3 rounded-circle text-white">${game.gameBoard.tile[i]}</li>`;
  }
}

function startGame() {
  game.gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  game.gameBoard.displayBoard();
  playGame(game.game.players[0]);
}

function playGame(player) {
  game.gameBoard.message.innerHTML = `${player.name} make a move`;
  game.game
}

function createPlayer(mark) {
  const playerName = document.getElementById('player-name').value;
  game.gameBoard.players.push(game.player(playerName, mark));
  if (game.gameBoard.tile.length > 0) {
    selectPlayer();
  } else {
    startGame();
  }
}

export { welcome, selectPlayer, createPlayer }
