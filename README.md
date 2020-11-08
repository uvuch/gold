# README

This README would normally document whatever steps are necessary to get the
application up and running.

Implementation notes
=====================

**Classes:** GameEngine, Board


GameEngine
-----------
- keeps board size as `M x N`
- Two boards (frames) and a pointer to active
- `reset()` prepares both boards

  

Board
--------
- `reset()` sets the size and cleans the board
- `set_cell(x, y)` sets a particular cell
- `clear_cell(x, y)` clears a particular cell
- `is_cell_alive(x,y)` returns boolean indicated whether the cell is set or cleaned
- `is_cell_dead(x,y)` same as above but works in inverse (can be useful in some
   places)
- `number_of_neighbors(x,y)` returns number of neighbors of a particular cell
   
if cell_is_alive
    if (cell is going to die)
        clear_cell
    else set_cell
else
    if (cell is going to reborn)
        set_cell
    else clear_cell 
