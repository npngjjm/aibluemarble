import { Game } from "../ts/domain/game.js";
import { vi } from "vitest";
import type { Mock } from "vitest";

export class ApplicationRunner {
  fakeUI: {
    showTurn: Mock;
    move: Mock;
    propose: Mock;
    update: Mock;
  };

  fakeNormalDice: {
    getTotal: Mock;
    create: Mock;
    isDouble: Mock;
  };
  fakeDoubleDice: {
    getTotal: Mock;
    create: Mock;
    isDouble: Mock;
  };
  fakeNormalTenDice: {
    getTotal: Mock;
    create: Mock;
    isDouble: Mock;
  };

  constructor() {
    this.fakeUI = {
      showTurn: vi.fn(),
      move: vi.fn(),
      propose: vi.fn(),
      update: vi.fn(),
    };

    this.fakeNormalDice = {
      getTotal: vi.fn().mockReturnValue(4),
      create: vi.fn(),
      isDouble: vi.fn().mockReturnValue(false),
    };

    this.fakeDoubleDice = {
      getTotal: vi.fn().mockReturnValue(4),
      create: vi.fn(),
      isDouble: vi.fn().mockReturnValue(true),
    };
    this.fakeNormalTenDice = {
      getTotal: vi.fn().mockReturnValue(10),
      create: vi.fn(),
      isDouble: vi.fn().mockReturnValue(false),
    };
  }

  public roll() {
    const game : Game = new Game(this.fakeUI, this.fakeNormalDice);
    game.roll();
    expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
    expect(this.fakeUI.propose).toHaveBeenCalled();
    expect(this.fakeUI.update).toHaveBeenCalledWith(0, {
      position: 4,
      money: 100000,
      properties: [],
    });
  }

  public rollBuyRoll() {
    const game : Game = new Game(this.fakeUI, this.fakeNormalDice);
    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 4);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(1, 0, {
      position: 4,
      money: 100000,
      properties: [],
    });
    expect(this.fakeUI.propose).toHaveBeenCalledWith(0, {
      property: "마닐라",
      price: 80,
    });

    game.buy();
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(2, 0, {
      position: 4,
      money: 100000 - 80,
      properties: [4],
    });
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(1, 1);

    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 1, 4);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(3, 1, {
      position: 4,
      money: 100000,
      properties: [],
    });
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(4, 1, {
      position: 4,
      money: 100000 - 80,
      properties: [],
    });
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(5, 0, {
      position: 4,
      money: 100000,
      properties: [4],
    });
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(2, 0);
  }

  public rollDouble() {
    const game : Game = new Game(this.fakeUI, this.fakeDoubleDice);
    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 4);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(1, 0, {
      position: 4,
      money: 100000,
      properties: [],
    });
    expect(this.fakeUI.propose).toHaveBeenNthCalledWith(1, 0, {
      property: "마닐라",
      price: 80,
    });

    game.buy();
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(2, 0, {
      position: 4,
      money: 100000 - 80,
      properties: [4],
    });
    expect(this.fakeUI.showTurn).toHaveBeenCalledWith(0);

    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 0, 4);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(3, 0, {
      position: 8,
      money: 100000 - 80,
      properties: [],
    });
    expect(this.fakeUI.propose).toHaveBeenNthCalledWith(2, 0, {
      property: "이스탄불",
      price: 100,
    });
  }

  public rollEight() {
    const game : Game = new Game(this.fakeUI, this.fakeNormalTenDice);
    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 10);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(1, 0, {
      position: 10,
      money: 100000,
      properties: [],
    });
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(1, 1);

    this.fakeNormalTenDice.getTotal = vi.fn().mockReturnValue(4);
    game.roll();
    expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 1, 4);
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(2, 1, {
      position: 4,
      money: 100000,
      properties: [],
    });
    expect(this.fakeUI.propose).toHaveBeenNthCalledWith(1, 1, {
      property: "마닐라",
      price: 80,
    });

    game.buy();
    expect(this.fakeUI.update).toHaveBeenNthCalledWith(3, 1, {
      position: 4,
      money: 100000 - 80,
      properties: [4],
    });
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(2, 0);

    game.roll();
    // expect(this.fakeUI.move).not.toHaveBeenCalled();
    expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(3,1);
  }
}
