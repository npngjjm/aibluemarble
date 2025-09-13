export { UI };
import { movePlayer } from "./board.js";
class UI {
  constructor() {
    this.listeners = [];
  }
  addListener(listener) {
    this.listeners.push(listener);
  }
  move(n) {
    setTimeout(() => {
      movePlayer(0, n);
    }, 2000);
  }

  rolled() {
    const event = {
      type: "roll",
      value: 4,
    };

    this.listeners.forEach((listener) => listener.update(event));
  }
}
