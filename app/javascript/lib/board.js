export class Board {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for(let j= 0; j < cols; j++) {
        row.push(Math.round(Math.random()));
      }

      this.data.push(row);
    }
  }

  set_cell(r, c) {
    this.data[r][c] = 1;
  }

  clear_cell(r, c) {
    this.data[r][c] = 0;
  }

  is_cell_alive(r, c) {
    this.data[r][c] == 1;
  }

  is_cell_going_to_die(r, c) {
    let.neighbors = number_of_neighbors(r, c);
    neighbors < 2 || neighbors > 3;
  }

  is_cell_goint_to_reborn(r, c) {
    let.neighbors = number_of_neighbors(r, c);
    neighbors > 2;
  }

  number_of_neighbors(r, c) {
    let counter = 0;
    let row_min = r == 0 ? r : r - 1;
    let row_max = r == (this.rows - 1) ? r : r + 1;
    let col_min = c == 0 ? c : c - 1;
    let col_max = c == (this.cols - 1) ? c : c + 1;

    for (let i = row_min; i <= row_max; i++) {
      for (let j = col_min; j <= col_max; j++) {
        if (i == r && j = c) continue; //skipping if we are looking at the testing cell itself
        if (this.data[i][j] == 1) counter++;
      }
    }

    return counter;
  }
}
