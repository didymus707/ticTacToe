import * as game from './game.js';

const message = document.getElementById('message');

function welcome() {
  message.innerHTML = `Welcome to tic-tac-toe game<br>
                       <button id="start" type="button">Start</button>`;
  game.gameBoard.displayBoard();
}

function startGame() {
  game.gameMatch.playing = true;
  game.gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  game.gameBoard.displayBoard();
  const spots = document.getElementsByClassName('spot');
  for (let i = 0; i < spots.length; i += 1) {
    spots[i].addEventListener('click', () => { game.gameBoard.mark(spots[i]); });
  }
  game.gameMatch.displayScore();
  game.gameMatch.playGame(game.gameMatch.players[0]);
}

function selectPlayer() {
  message.innerHTML = `Player ${3 - game.gameBoard.tile.length} write a name and select a mark<br>
                       <input type="text" placeholder="Name" id="player-name"></input>`;
  const options = document.createElement('ul');
  for (let i = 0; i < game.gameBoard.tile.length; i += 1) {
    options.innerHTML += `<li id="${game.gameBoard.tile[i]}" class="mark-options list-inline-item p-3 rounded-circle text-white">${game.gameBoard.tile[i]}</li>`;
  }
  message.appendChild(options);
  const optionsMark = document.getElementsByClassName('mark-options');
  for (let i = 0; i < optionsMark.length; i += 1) {
    optionsMark[i].addEventListener('click', createPlayer);
  }
}

function createPlayer() {
  const playerName = document.getElementById('player-name').value;
  const player = game.player(playerName, this.innerHTML);
  game.gameMatch.players.push(player);
  game.gameBoard.tile.splice(game.gameBoard.tile.findIndex(mark => mark === player.markPlayer), 1);
  if (game.gameBoard.tile.length > 0) {
    selectPlayer();
  } else {
    game.gameMatch.shift = game.gameMatch.players[0];
    startGame();
  }
}

export { welcome, selectPlayer, createPlayer };
