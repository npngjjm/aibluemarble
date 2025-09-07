import { FakeGame } from "./fakegame.js";
import { UIRunner } from "./uiRunner.js";
jest.mock("./ui.js");

describe("BlueMarble end-to-end test", () => {
  it("RollAndMovePlayer", () => {
    const UIrunner = new UIRunner();
    const game = new FakeGame(UIrunner);

    UIrunner.roll();
    game.move();
    UIrunner.movePlayerToken();
    game.endTurn();
    UIrunner.showEndTurn();
  });
});
