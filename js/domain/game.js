export { Game };

//test하는 실제 객체
class Game {
  constructor(ui) {
    this.listeners = [];
    this.turn = 0;
    this.ui = ui;
    this.turn = 0;
  }
  addListener(listener) {
    this.listeners.push(listener);
  }

  roll() {
    this.ui.move(4);
    
    this.turn = 1;
    this.ui.showTurn(this.turn);
  }
}
