const gameMatch = (() => {
  const players = [];
  const shift = '';
  let playing = false;

  function makeAvailableMarks() {
    const spots = document.getElementsByClassName('spot');
    for (let i = 0; i < spots.length; i += 1) {
      // eslint-disable-next-line no-use-before-define
      spots[i].addEventListener('click', () => { gameBoard.mark(spots[i]); });
    }
  }

  function playGame() {
    // eslint-disable-next-line no-use-before-define
    gameBoard.message.innerHTML = `${gameMatch.shift.namePlayer} make a move`;
  }

  function displayScore() {
    const div = document.getElementById('score');
    div.innerHTML = '<p class="col-12 text-center bg-info text-white m-0">SCORE<p>';
    for (let i = 0; i < players.length; i += 1) {
      div.innerHTML += `<div class="col-6 p-2 bg-info text-white text-center">
                         <p>${players[i].namePlayer}</p>
                         <p>${players[i].score}</p>
                       </div>`;
    }
  }

  function startGame() {
    gameMatch.playing = true;
    // eslint-disable-next-line no-use-before-define
    gameBoard.board = ['', '', '', '', '', '', '', '', ''];
    // eslint-disable-next-line no-use-before-define
    gameBoard.displayBoard();
    displayScore();
    playGame(players[0]);
    makeAvailableMarks();
  }

  return {
    players,
    shift,
    playGame,
    playing,
    displayScore,
    startGame,
    makeAvailableMarks,
  };
})();

const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];
  const tile = ['X', 'O'];
  const message = document.getElementById('message');

  function changeDivsColors() {
    let indexes = [];
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
      indexes = [0,1,2];
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
      indexes = [3,4,5];
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
      indexes = [6,7,8];
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
      indexes = [0,3,6];
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
      indexes = [1,4,7];
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
      indexes = [2,5,8];
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
      indexes = [0,4,8];
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
      indexes = [2,4,6];
    }

    for (let i = 0; i < indexes.length; i += 1) {
      document.getElementById(indexes[i]).className += ' bg-success';
    }
  }

  const resetBoard = () => {
    // eslint-disable-next-line no-use-before-define
    board = ['', '', '', '', '', '', '', '', ''];
    console.log(gameMatch.playing);
    // eslint-disable-next-line no-use-before-define
    displayBoard();
    // eslint-disable-next-line no-use-before-define
    const reset = document.getElementById('reset');
    const button = document.getElementById('button-reset');
    reset.removeChild(button);
    gameMatch.makeAvailableMarks();
    gameMatch.playing = true;
    gameMatch.playGame();
  };

  function displayReset() {
    const reset = document.getElementById('reset');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'button-reset');
    button.className = 'bg-info text-white p-4 border-0 rounded my-2';
    button.addEventListener('click', () => { resetBoard(); });
    button.innerHTML = 'Reset';
    reset.appendChild(button);
  }

  const displayBoard = () => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < 9; i += 1) {
      container.innerHTML += `<div data-number="${i}" id="${i}" class="spot border border-warning d-flex justify-content-center align-items-center text-white font-weight-bold">${board[i]}</div>`;
    }
  };

  const check = (player) => {
    if (
      (board[0] === board[1] && board[1] === board[2] && board[0] !== '')
      || (board[3] === board[4] && board[4] === board[5] && board[3] !== '')
      || (board[6] === board[7] && board[7] === board[8] && board[6] !== '')
      || (board[0] === board[3] && board[3] === board[6] && board[0] !== '')
      || (board[1] === board[4] && board[4] === board[7] && board[1] !== '')
      || (board[2] === board[5] && board[5] === board[8] && board[2] !== '')
      || (board[0] === board[4] && board[4] === board[8] && board[0] !== '')
      || (board[2] === board[4] && board[4] === board[6] && board[2] !== '')
    ) {
      message.innerHTML = `${player.namePlayer} won!!`;
      player.score += 1;
      gameMatch.playing = false;
      gameMatch.displayScore();
      changeDivsColors();
      displayReset();
    } else if (!board.includes('')) {
      message.innerHTML = 'We need another round to find a winner!!';
      displayReset();
    } else {
      gameMatch.shift = gameMatch.shift == gameMatch.players[0] ? gameMatch.players[1] : gameMatch.players[0];
      gameMatch.playGame();
    }
  };

  const mark = (tag) => {
    console.log(gameMatch.playing);
    if (!gameMatch.playing) {
      return;
    }

    if (tag.innerHTML !== '') {
      message.innerHTML = 'Choose another space';
    } else {
      board[tag.dataset.number] = gameMatch.shift.markPlayer;
      tag.innerHTML = board[tag.dataset.number];
      check(gameMatch.shift);
    }
  };

  return {
    mark,
    check,
    displayBoard,
    tile,
    message,
    resetBoard,
  };
})();

const player = (name, mark) => {
  const namePlayer = name;
  const markPlayer = mark;
  // eslint-disable-next-line prefer-const
  let score = 0;
  const getName = () => namePlayer;

  return {
    namePlayer,
    markPlayer,
    getName,
    score,
  };
};

export { gameBoard, player, gameMatch };
