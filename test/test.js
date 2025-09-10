import { ApplicationRunner } from "./applicationRunner.test.js";

describe("BlueMarble end-to-end test", () => {
  it("Roll", () => {
    const app = new ApplicationRunner();

    //초기 셋업
    app.start();
    //주사위를 사용자가 눌렀다고 쳤을 때
    app.roll();
  });
});
