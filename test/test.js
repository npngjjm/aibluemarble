import { Game } from "../js/domain/game.js";
import { ApplicationRunner } from "./applicationRunner.js";

describe("BlueMarble unit test", () => {
  it("Roll4AndMoveEndTurn", () => {
    const app = new ApplicationRunner();

    //주사위를 사용자가 눌렀다고 쳤을 때
    app.roll();
  });

  // it("Roll4AndPurchaseAndPay", () => {
  //   const app = new ApplicationRunner();

  //   app.rollBuyROll();
  // });
});
