const gameBoard = (() => {
  let board = ['', '', '', '', '', '', '', '', '',];
  let o = 'O';
  let x = 'X';
  const mark = (space, tile) {
    if (board[space] !== '') {
      MessageChannel.innerHTML = 'Choose another space';
    } else {
      board[space] = tile;
    }
  }
  const check = () {
    if (board[0] === board[1] && board[1] === board[2] ||
        board[3] === board[4] && board[4] === board[5] ||
        board[6] === board[7] && board[7] === board[8] ||
        board[0] === board[3] && board[3] === board[6] ||
        board[1] === board[4] && board[4] === board[7] ||
        board[2] === board[5] && board[5] === board[8] ||
        board[0] === board[4] && board[4] === board[8] ||
        board[2] === board[4] && board[4] === board[6] ) {
            
        }
    
  }
  return {
    board,
    o,
    x,
    mark
  }
})();

game => module
player => factory function

