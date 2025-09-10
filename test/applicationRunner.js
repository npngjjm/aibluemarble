export { ApplicationRunner };
import { Game } from "./game.js";
import {UI} from "./ui.js";
import { Main } from "./main.js";

//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    const game = new Game();
    const ui = new UI();
    const main = new Main(game, ui);

  }

  roll() {
    this.ui.roll();
  }

  showDice() {
    expect(this.ui.showDice).toHaveBeenCalledWith(4);
  }
}