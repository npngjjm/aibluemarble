import { Game } from "./game.js";
import { UI } from "./ui.js";
jest.mock("./ui.js");

describe("BlueMarble end-to-end test", () => {
  it("MovePlayer", () => {
    const FakeUI = new UI();
    const game = new Game(FakeUI);

    game.move({ die1: 3, die2: 1 });

    expect(FakeUI.movePlayerToken).toHaveBeenCalledWith(4);
  });
});
