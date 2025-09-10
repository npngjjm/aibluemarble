import { ApplicationRunner } from "./applicationRunner.js";

describe("BlueMarble end-to-end test", () => {
  it("Roll", () => {
    const app = new ApplicationRunner();
    app.roll();
  });
});
