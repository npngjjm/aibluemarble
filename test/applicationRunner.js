export { ApplicationRunner };
import { jest, describe, it, expect } from "@jest/globals";
import { Game } from "../js/game.js";
import { UI } from "../js/ui.js";
import { Main } from "../js/main.js";

//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    this.game = new Game();
    this.ui = new UI();
    this.main = new Main(this.game, this.ui);
  }

  roll() {
    const moveSpy = jest.spyOn(this.ui, "move");
    this.ui.rolled();
    expect(moveSpy).toHaveBeenCalledWith(4);
  }
}
