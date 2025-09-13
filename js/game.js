export { Game };

//test하는 실제 객체
class Game {
  constructor() {
    this.listeners = [];
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
