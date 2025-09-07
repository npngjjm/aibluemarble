import { Game } from "./game.js";
import { UI } from "./ui.js";

describe("BlueMarble end-to-end test", () => {
  it("MovePlayer", () => {
    const ui = new UI();
    const game = new Game(ui);

    game.move({ die1: 3, die2: 1 });

    expect(ui.movePlayerToken).toHaveBeenCalledWith(4);
  });
});
