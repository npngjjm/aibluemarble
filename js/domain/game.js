export { Game };

//test하는 실제 객체
class Game {
  constructor(ui) {
    this.turn = 0;
    this.ui = ui;
    this.turn = 0;
  }

  roll() {
    this.ui.move(this.turn, 4);
    
    if(this.turn === 0) {
      this.turn = 1;
    }
    else if(this.turn ===1) {
      this.turn = 0;
    }

    this.ui.showTurn(this.turn);
  }
}
