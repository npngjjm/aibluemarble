export { Main };
import { Game } from "./game.js";
import { UI } from "./ui.js";

class Main {
  constructor() {
    this.game = new Game();
    this.ui = new UI();
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
