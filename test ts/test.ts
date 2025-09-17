import { ApplicationRunner } from "./applicationRunner.js";
// Jest 글로벌 함수 사용 (import 제거)


describe("BlueMarble unit test", () => {
  it("Roll4AndMoveEndTurn", () => {
    const app = new ApplicationRunner();
    app.roll();
  });

  // it("Roll4AndPurchaseAndPay", () => {
  //   const app = new ApplicationRunner();
  //   app.rollBuyRoll();
  // });
});
