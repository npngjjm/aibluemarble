import { ApplicationRunner } from "./applicationRunner.js";
// Jest 글로벌 함수 사용 (import 제거)

describe("BlueMarble end-to-end-like test", () => {
  it("Roll4AndMoveAndPropose", () => {
    const app = new ApplicationRunner();
    app.roll();
  });

  it("Roll4AndPurchaseAndRollAndPay", () => {
    const app = new ApplicationRunner();
    app.rollBuyRoll();
  });

  it("rollDouble", () => {
    const app = new ApplicationRunner();
    app.rollDouble();
  });

  it("islandTest", () => {
    const app = new ApplicationRunner();
    app.rollTen();
  });

  it("islandEscapeTest", () => {
    const app = new ApplicationRunner();
    app.rollTenAndEscape();
  });
});
