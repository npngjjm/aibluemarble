export class Main {
  constructor(ui, game) {
    this.game = game;
    this.ui = ui;
    this.game.addListener(new GameListener(this.ui));
    this.ui.addListener(new UIListener(this.game));
  }
}

class UIListener {
  constructor(game) {
    this.game = game;
  }
  update(event) {
    if (event.type === "roll") {
      this.game.roll(event.value);
    }
  }
}

class GameListener {
  constructor(ui) {
    this.ui = ui;
  }

  update(event) {
    if (event.type === "move") {
      this.ui.move(event.value);
    }
  }
}
