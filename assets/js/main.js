const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let spaces = [...document.querySelectorAll('.spot')];
  const tiles = ['O', 'X'];
  const mark = (space, player) => {
    if (board[space] !== "") {
      alert('Choose another space');
    } else {
      spaces[space].innerHTML = player.tile;
      board[space] = player.tile;
      check(board, player);
    }
  };

  const check = (arr, player) => {
    const msg = document.querySelector('.info-msg');
    const name = player.getName();
    let moves = 0;
    const horizontals = [[arr[0],arr[1],arr[2]], [arr[3],arr[4],arr[5]], [arr[6],arr[7],arr[8]]];
    const verticals = [[arr[0],arr[3],arr[5]], [arr[1],arr[4],arr[7]], [arr[2],arr[5],arr[8]]];
    const diagonals = [[arr[0],arr[4],arr[8]], [arr[2],arr[4],arr[6]]];
    const winCombo = [...horizontals, ...verticals, ...diagonals];
    const truthy = winCombo.some(ary => ary.every(ele => ele === player.tile));
    while (moves <= 9) {
      if (truthy) {
        msg.textContent = name + ' wins';
      } else if (!arr.includes("")) {
        msg.textContent = `It's a tie`;
      } else return;
      moves++;
    }
    return msg;
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

  const rematch = (gameboard) => {
    gameboard = ["", "", "", "", "", "", "", "", ""];
    spots.map((el) => {
      el.textContent = '';
    });
  }

  const resetGame = (gameboard) => {
    rematch();
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
    msg.textContent = `${name}, you have played.... Next Player your turn`;
  }

  // place tiles on click
  boardContainer.addEventListener('click', (e) => {
    let num = switchPlays(simBoard);
    let player = players[num];
    info(player)
    let index = spots.indexOf(e.target);
    gameBoard.mark(index, player);
    openModal();
  });

  const openModal = () => {
    let word = document.querySelector('.info-msg').textContent;
    let modal = document.querySelector('.modal');
    if (word.includes('wins') || word.includes('tie')) {
      modal.style.display = 'block';
    }
    let rematchBtn = document.querySelector('.rematch');
    rematchBtn.addEventListener('click', () => {
      rematch(board);
    });
  };

  return {
    displayBoard
  }
})();