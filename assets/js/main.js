const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let spaces = [...document.querySelectorAll('.spot')];
  const tiles = ['O', 'X'];
  const mark = (space, tile) => {
    if (board[space] !== "") {
      alert('Choose another space');
    } else {
      spaces[space].innerHTML = tile;
      board[space] = tile;
      check();
    }
  };

  const check = (arr) => {
    const horizontals = [[0,1,2], [3,4,5], [6,7,8]];
    const verticals = [[0,3,5], [1,4,7], [2,5,8]];
    const diagonals = [[0,4,8], [2,4,6]];
    result = false;
    
  };

  return {
    board,
    spaces,
    tiles,
    mark,
    check
  };
})();

const Player = (name) => {
  let tile;
  const getName = () => name;

  return {
    tile,
    getName
  };
};

const Game = (() => {
  let score = [0, 0];
  let boardContainer = document.querySelector('.noone');
  let board = gameBoard.board;
  let simBoard = [];
  let spots = gameBoard.spaces;
  const btn = document.querySelector('.btn');
  const tiles = gameBoard.tiles;
  const players = [];
  const getPlayers = () => {
    const one = document.getElementById('pone');
    const two = document.getElementById('ptwo');
    const playerOne = Player(one.value);
    playerOne.tile = 'O';
    players.push(playerOne);
    const playerTwo = Player(two.value);
    playerTwo.tile = 'X';
    players.push(playerTwo);
    return players;
  }
  
  const displayBoard = (evt) => {
    getPlayers();
    evt.preventDefault();
    boardContainer.classList.toggle('board');
  }

  const changeScore = (index) => {
    score[index] += 1;
  };
  const resetBoard = () => {
    gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  }
  const resetScore = () => {
    score = [0, 0];
  }

  btn.addEventListener('click', displayBoard);

  // switch Players
  const switchPlays = (board) => {
    let index;
    if (board.length % 2 === 0) index = 0;
    else index = 1
    board.push(1);
    return index;
  }

  const info = (player) => {
    const msg = document.querySelector('.info-msg');
    const name = player.getName();
    msg.textContent = `${name}, you have played....`
  }

  // place tiles on click
  boardContainer.addEventListener('click', (e) => {
    let num = switchPlays(simBoard);
    let player = players[num];
    info(player)
    let index = spots.indexOf(e.target);
    gameBoard.mark(index, player.tile);
  });

  return {
    displayBoard
  }
})();