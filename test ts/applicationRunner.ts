import { Game } from "../ts/domain/game.js";
import type { Mock } from "jest-mock";
import { jest, describe, it, expect } from "@jest/globals";


export class ApplicationRunner {
  fakeUI: {
    showTurn: Mock;
    move: Mock;
    propose: Mock;
    pay: Mock;
    buy: Mock;
  };
  game: Game;

  constructor() {
    this.fakeUI = {
      showTurn: jest.fn(),
      move: jest.fn(),
      propose: jest.fn(),
      pay: jest.fn(),
      buy: jest.fn(),
    };
    this.game = new Game(this.fakeUI);
  }

  roll() {
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.propose).toHaveBeenCalled();
  }

  buy() {
    this.game.roll();
    this.game.buy();
    this.game.roll();

    expect(this.fakeUI.buy).toHaveBeenCalledWith(0);
    expect(this.fakeUI.pay).toHaveBeenCalled();
  }

  rollBuyRoll() {
    this.roll();
    this.buy();
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.propose).not.toHaveBeenCalled();
  }
}
