export { Game };

//test하는 실제 객체
class Game {
  constructor(ui) {
    this.listeners = [];
    this.turn = 0;
    this.ui = ui;
  }
  addListener(listener) {
    this.listeners.push(listener);
  }

  roll() {
    this.ui.move(4);
  }
}
