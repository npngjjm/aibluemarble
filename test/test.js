import { ApplicationRunner } from "./applicationRunner.js";

describe("BlueMarble end-to-end test", () => {
  it("Roll4AndMove", () => {
    const app = new ApplicationRunner();

    //주사위를 사용자가 눌렀다고 쳤을 때
    app.roll();
  });

  // it("RollAndPurchase", () => {
  //   const app = new ApplicationRunner();

  //   app.roll();
  //   app.purChase();
  // });
});
