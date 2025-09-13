export { UI };
import { movePlayer } from "/js/GUI/player.js";
import { createTurnIndicator } from "/js/GUI/main.js";
class UI {
  constructor() {
    this.listeners = [];
  }

  move(n) {
    movePlayer(0, n);
  }

  rolled() {
    const event = {
      type: "roll",
    };

    this.listeners.forEach((listener) => listener.update(event));
  }

  showTurn(turn) {
    createTurnIndicator(turn);
  }
}
