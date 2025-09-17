import { Game } from "../ts/domain/game.js";
import { vi } from "vitest";
import type { Mock } from "vitest";
// Jest 글로벌 함수 사용 (import 제거)


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
  showTurn: vi.fn(),
  move: vi.fn(),
  propose: vi.fn(),
  pay: vi.fn(),
  buy: vi.fn(),
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
