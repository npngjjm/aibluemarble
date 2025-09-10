export { ApplicationRunner };
import { jest, describe, it, expect } from '@jest/globals';
import { Game } from "./game.js";
import {UI} from "./ui.js";
import { Main } from "./main.js";


//UI에 이벤트를 임의로 발생시키는 객체
class ApplicationRunner {
  constructor() {
    this.game = new Game();
    this.ui = new UI();
    this.main = new Main(this.game, this.ui);
  }

  start() {
    this.main.addUIListener();
    this.main.addGameListener();
  }

  roll() {
    const moveSpy = jest.spyOn(this.ui, 'move');
    this.ui.roll();
    expect(moveSpy).toHaveBeenCalledWith(4);
  }
}