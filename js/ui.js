export { UI };
import { movePlayer } from "./player.js";
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
      value: 4,
    };

    this.listeners.forEach((listener) => listener.update(event));
  }
}
