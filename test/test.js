import { ApplicationRunner } from "./applicationRunner.js";

describe("BlueMarble end-to-end test", () => {
  it("Roll", () => {
    const app = new ApplicationRunner();

    //주사위를 사용자가 눌렀다고 쳤을 때
    app.roll();
  });
});
