const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', '',];
  let o = 'O';
  let x = 'X';
  const mark = (space, tile) => {
    if (board[space] !== '') {
      MessageChannel.innerHTML = 'Choose another space';
    } else {
      board[space] = tile;
      check();
    }
  }
  const check = () => {
    if (board[0] === board[1] && board[1] === board[2] ||
        board[3] === board[4] && board[4] === board[5] ||
        board[6] === board[7] && board[7] === board[8] ||
        board[0] === board[3] && board[3] === board[6] ||
        board[1] === board[4] && board[4] === board[7] ||
        board[2] === board[5] && board[5] === board[8] ||
        board[0] === board[4] && board[4] === board[8] ||
        board[2] === board[4] && board[4] === board[6] ) {
          return `the player that won`;
        }
    
  }
  return {
    board,
    o,
    x,
    mark,
    check
  }
})();

const Player = (name, tile) => {
  const getName = () => name;
  const setName = () => name;
  const selectTile = (index) => {
    let message = `Select a tile by selecting 0 for 'O' and 1 for 'X'`
    let input = document.getElementById('index');
    index = input.value;
    if (index === 0) {
      player.tile = tile.unshift;
    } else {
      player.tile = tile.pop
    }
  }
}
game => module
// player => factory function;

