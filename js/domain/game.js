export { Game };

//test하는 실제 객체
class Game {
  constructor() {
    this.listeners = [];
    this.turn = 0;
  }
  addListener(listener) {
    this.listeners.push(listener);
  }

  roll() {
    const event = {
      type: "move",
      value: 4,
    };

    this.listeners.forEach((listener) => listener.update(event));
  }
}
