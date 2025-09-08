import { FakeGame } from "./fakegame.js";
import { ApplicationRunner } from "./applicationRunner.js";
jest.mock("./ui.js");

describe("BlueMarble end-to-end test", () => {
  it("Roll", () => {
    const game = new FakeGame();
    const application = new ApplicationRunner();

    application.start(game);
    application.roll();
    game.hasReceivedRoll();
    game.playerHasBankrupted();
    application.showsGameOver();
  });
});
