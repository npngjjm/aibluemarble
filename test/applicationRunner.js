export { ApplicationRunner };
import { jest, describe, it, expect } from "@jest/globals";
import { Main } from "../js/main.js";

//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    this.main = new Main();
  }

  roll() {
    const moveSpy = jest.spyOn(this.main.ui, "move");
    this.main.ui.rolled();
    expect(moveSpy).toHaveBeenCalledWith(4);
  }
}
