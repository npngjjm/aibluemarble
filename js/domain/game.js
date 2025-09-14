export { Game };

//test하는 실제 객체
class Game {
  constructor(ui) {
    this.turn = 0;
    this.ui = ui;
    this.turn = 0;
    this.playerPositions = [0, 0];
    this.lands = new Array(40).fill(null);
  }

  roll() {
    this.move(this.turn, 4);

    if (this.lands[this.playerPositions[this.turn]] === null) {
      this.ui.propose(this.playerPositions[this.turn]);
    }

    if (this.turn === 0) {
      this.turn = 1;
    } else if (this.turn === 1) {
      this.turn = 0;
    }

    this.ui.showTurn(this.turn);
  }

  move(turn, step) {
    this.playerPositions[turn] += step;
    this.ui.move(turn, step);
  }
}
