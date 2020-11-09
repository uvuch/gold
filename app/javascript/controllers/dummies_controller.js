// javascript/controllers/products_controller.es6
import { Controller } from "stimulus"
import { GameEngine } from '../lib/game_engine';

export default class extends Controller {
  connect() {
    var game = new GameEngine(5, 4); //5 rows, 4 columns
  }
}
