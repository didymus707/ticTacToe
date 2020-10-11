const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const tile = ['X', 'O'];
  const message = document.getElementById('message');

  const mark = (space, tile) => {
    if (board[space] !== "") {
      message.innerHTML = "Choose another space";
    } else {
      board[space] = tile;
      check();
    }
  };

  const check = (player) => {
    if (
      (board[0] === board[1] && board[1] === board[2]) ||
      (board[3] === board[4] && board[4] === board[5]) ||
      (board[6] === board[7] && board[7] === board[8]) ||
      (board[0] === board[3] && board[3] === board[6]) ||
      (board[1] === board[4] && board[4] === board[7]) ||
      (board[2] === board[5] && board[5] === board[8]) ||
      (board[0] === board[4] && board[4] === board[8]) ||
      (board[2] === board[4] && board[4] === board[6])
    ) {
      return `${player} won!!`;
    }
  };

  const displayBoard = () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < 9; i += 1) {
      container.innerHTML += `<div class="spot border border-warning d-flex justify-content-center align-items-center text-white font-weight-bold">${board[i]}</div>`;
    }
  };

  return {
    mark,
    check,
    displayBoard,
    tile,
  };
})();

const player = (name, mark) => {
  const namePlayer = name;
  const markPlayer = mark;
  const getName = () => namePlayer;
  const selectTile = (tile) => {
    const message = document.createElement('div');
    message.innerHTML = "Select a tile by selecting 0 for 'O' and 1 for 'X'";
    let input = document.getElementById("index");
    index = input.value;
    if (index === 0) {
      player.tile = tile.unshift;
    } else {
      player.tile = tile.pop;
    }
  };

  return {
    namePlayer,
    markPlayer,
    getName,
    selectTile,
  };
};

const game = (() => {
  let score = [0, 0];
  const players = [];
  const changeScore = (index) => {
    score[index] += 1;
  };
  const resetBoard = () => {
    gameBoard.board = ['', '', '', '', '', '', '', '', ''];
  }
  const resetScore = () => {
    score = [0, 0];
  }

  return {
    score,
    changeScore,
    resetBoard,
    resetScore,
    players,
  }
})();

export { gameBoard, player, game };
