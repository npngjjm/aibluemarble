export { UI };
import { movePlayer } from "/js/GUI/player.js";
class UI {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
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
}
