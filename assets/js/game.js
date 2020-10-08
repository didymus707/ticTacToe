export const gameBoard = (() => {
  let board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  let tile = ['X', 'O'];
  const message = document.getElementById('message');

  const mark = (space, tile) => {
    if (board[space] !== "") {
      MessageChannel.innerHTML = "Choose another space";
    } else {
      board[space] = tile;
      check();
    }
  };

  const check = () => {
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
      return `the player that won`;
    }
  };

  const displayBoard = () => {
    const spots = document.getElementsByClassName('spot');
    for (let i = 0; i < spots.length; i += 1) {
      spots[i].innerHTML = board[i];
    }
  };

  return {
    board,
    mark,
    check,
    displayBoard,
  };
})();

export const player = (name) => {
  const namePlayer = name;
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
    getName,
    selectTile,
  };
};

export const game = (() => {
  let score = [0, 0];
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
    resetScore
  }
})();

