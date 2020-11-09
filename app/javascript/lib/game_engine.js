import { Board } from './board';

export class GameEngine {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.boards = [new Board(rows, cols), new Board(rows, cols)];
    this.active_board = 0;
    this.inactive_board = 1;
  }

  switch_boards() {
    this.active_board = this.active_board == 1 ? 0 : 1;
    this.inactive_board = 1 - this.active_board;
  }

  get_active_board() {
    return this.boards[this.active_board];
  }

  update() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let active_board = this.boards[this.active_board];
        let inactive_board = this.boards[this.inactive_board];

        if (active_board.is_cell_alive(i, j)) {
            if (active_board.is_cell_going_to_die(i, j))
                inactive_board.clear_cell(i, j);
            else inactive_board.set_cell(i, j);
        } else {
            if (active_board.is_cell_goint_to_reborn(i, j))
                inactive_board.set_cell(i, j);
            else inactive_board.clear_cell(i, j);
        }
      }
    }

    this.switch_boards();
  }
}
