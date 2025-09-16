import { ApplicationRunner } from "./applicationRunner.js";
import { jest, describe, it, expect } from "@jest/globals";


describe("BlueMarble unit test", () => {
  it("Roll4AndMoveEndTurn", () => {
    const app = new ApplicationRunner();
    app.roll();
  });

  it("Roll4AndPurchaseAndPay", () => {
    const app = new ApplicationRunner();
    app.rollBuyRoll();
  });
});
