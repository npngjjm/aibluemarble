export { ApplicationRunner };
import { jest, describe, it, expect } from "@jest/globals";
import { Game } from "/js/domain/game.js";


//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    this.fakeUI = {
      listeners: [],
      rolled: function () {
        this.listeners.forEach((listener) =>
          listener.update({
            type: "roll",
          })
        );
      },
      showTurn: jest.fn(),
      move: jest.fn(),
      addListener(listener) {
        this.listeners.push(listener);
      },
    };
    this.game = new Game(this.fakeUI);
  }

  roll() {
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(4);
    expect(this.fakeUI.showTurn).toHaveBeenCalledWith(1);
  }
}
