export { FakeGame };

class FakeGame {
  constructor(ui) {
    this.ui = ui;
  }

  move(dice) {
    const sum = dice.die1 + dice.die2;
    this.ui.movePlayerToken(sum);
  }
}
