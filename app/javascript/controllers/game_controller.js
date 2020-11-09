// javascript/controllers/game_controller.js
import { Controller } from "stimulus"
import { GameEngine } from '../lib/game_engine';

export default class extends Controller {
  static targets = ['board'];

  connect() {
    this.rows = 10;
    this.cols = 10;

    this.game_engine = new GameEngine(this.rows, this.cols);
    this.draw();
  }

  draw() {
    this.boardTarget.innerHTML = '';

    for(let i = 0; i < this.rows; ++i) {
      var row = document.createElement('div');
      row.classList.add('board-row');

      for(let j = 0; j < this.cols; ++j) {
        var col = document.createElement('div');
        col.classList.add('board-col');

        let board = this.game_engine.get_active_board();
        if (board.is_cell_alive(i, j)) col.classList.add('alive-cell');

        row.appendChild(col);
      }

      this.boardTarget.appendChild(row);
    }
  }

  update() {
    this.game_engine.update();
    this.draw();
  }
}
