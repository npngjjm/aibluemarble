export { UI };
import { movePlayer } from "/js/GUI/player.js";
import { createTurnIndicator } from "/js/GUI/main.js";
class UI {
  constructor() {
    this.listeners = [];
  }

  move(playerIndex, n) {
    movePlayer(playerIndex, n);
  }

  showTurn(turn) {
    createTurnIndicator(turn);
  }
}
