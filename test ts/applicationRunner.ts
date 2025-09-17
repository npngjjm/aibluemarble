import { Game } from "../ts/domain/game.js";
import { vi } from "vitest";
import type { Mock } from "vitest";

interface playerState {
  position: number;
  money: number;
  properties: number[];
}

export class ApplicationRunner {
  fakeUI: {
    showTurn: Mock;
    move: Mock;
    propose: Mock;
    update: Mock;
  };
  game: Game;

  constructor() {
    this.fakeUI = {
      showTurn: vi.fn(),
      move: vi.fn(),
      propose: vi.fn(),
      update: vi.fn(),
    };
    this.game = new Game(this.fakeUI);
  }

  roll() {
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.propose).toHaveBeenCalled();
  }

  buy() {
    this.game.buy();
    expect(this.fakeUI.update).toHaveBeenCalledWith({position : 0, money: 1500, properties: [0]});
  }

  rollBuyRoll() {
    this.roll();
    this.buy();
    this.game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.propose).not.toHaveBeenCalled();
  }
}
