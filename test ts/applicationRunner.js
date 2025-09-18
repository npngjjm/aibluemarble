import { Game } from "../ts/domain/game.js";
import { vi } from "vitest";
export class ApplicationRunner {
    fakeUI;
    game;
    constructor() {
        this.fakeUI = {
            showTurn: vi.fn(),
            move: vi.fn(),
            propose: vi.fn(),
            update: vi.fn(),
        };
        this.game = new Game(this.fakeUI);
    }
    roll() {
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
        expect(this.fakeUI.propose).toHaveBeenCalled();
        expect(this.fakeUI.update).toHaveBeenCalledWith(0, {
            position: 4,
            money: 100000,
            properties: [],
        });
    }
    rollBuyRoll() {
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenCalledWith(0, 4);
        expect(this.fakeUI.propose).toHaveBeenCalledWith(0, {
            property: "마닐라",
            price: 80,
        });
        expect(this.fakeUI.update).toHaveBeenCalledWith(0, {
            position: 4,
            money: 100000,
            properties: [],
        });
        this.game.buy();
        expect(this.fakeUI.update).toHaveBeenCalledWith(0, {
            position: 4,
            money: 100000 - 80,
            properties: [0],
        });
        expect(this.fakeUI.showTurn).toHaveBeenCalledWith(1);
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenCalledWith(1, 4);
        expect(this.fakeUI.propose).not.toHaveBeenCalledWith(1, 80);
        expect(this.fakeUI.update).toHaveBeenCalledWith(1, {
            position: 4,
            money: 100000 - 80,
            properties: [],
        });
    }
}
//# sourceMappingURL=applicationRunner.js.map