import * as game from './game.js';

const message = document.getElementById('message');
message.innerHTML += 'Welcome to tic-tac-toe Game, Player one write a name and select a mark<br>';
message.innerHTML += `<input type="text" placeholder="Name"></input>
                      <ul>
                        <li class="x list-inline-item bg-primary p-3 rounded-circle">X</li>
                        <li class="o list-inline-item bg-primary p-3 rounded-circle">Y</li>
                     </ul>`;


game.gameBoard.displayBoard();
// request selection of name and mark
//   loop
//     game
//     break loop if there's a winner
// reset game




