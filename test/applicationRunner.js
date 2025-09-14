export { ApplicationRunner };
import { jest, describe, it, expect } from "@jest/globals";
import { Game } from "/js/domain/game.js";

//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    this.fakeUI = {
      showTurn: jest.fn(),
      move: jest.fn(),
      propose: jest.fn(),
    };
    this.game = new Game(this.fakeUI);
  }

  roll() {
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.showTurn).toHaveBeenCalledWith(1);
    expect(this.fakeUI.propose).toHaveBeenCalled();
  }

  rollTwice() {
    this.game.roll();
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 4);
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(1, 1);
    expect(this.fakeUI.propose).toHaveBeenCalled();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 1, 4);
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(2, 0);
  }
}
