import { Game } from "../ts/domain/game.js";
import { vi } from "vitest";
export class ApplicationRunner {
    fakeUI;
    fakeNormalDice;
    game;
    constructor() {
        this.fakeUI = {
            showTurn: vi.fn(),
            move: vi.fn(),
            propose: vi.fn(),
            update: vi.fn(),
        };
        this.fakeNormalDice = {
            getTotal: vi.fn().mockReturnValue(4),
            create: vi.fn(),
            isDouble: vi.fn().mockReturnValue(false),
        };
        this.game = new Game(this.fakeUI, this.fakeNormalDice);
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
        expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 4);
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(1, 0, {
            position: 4,
            money: 100000,
            properties: [],
        });
        expect(this.fakeUI.propose).toHaveBeenCalledWith(0, {
            property: "마닐라",
            price: 80,
        });
        this.game.buy();
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(2, 0, {
            position: 4,
            money: 100000 - 80,
            properties: [4],
        });
        expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(1, 1);
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 1, 4);
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(3, 1, {
            position: 4,
            money: 100000,
            properties: [],
        });
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(4, 1, {
            position: 4,
            money: 100000 - 80,
            properties: [],
        });
        expect(this.fakeUI.showTurn).toHaveBeenNthCalledWith(2, 0);
    }
    rollDouble() {
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenNthCalledWith(1, 0, 4);
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(1, 0, {
            position: 4,
            money: 100000,
            properties: [],
        });
        expect(this.fakeUI.propose).toHaveBeenNthCalledWith(1, 0, {
            property: "마닐라",
            price: 80,
        });
        this.game.buy();
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(2, 0, {
            position: 4,
            money: 100000 - 80,
            properties: [4],
        });
        expect(this.fakeUI.showTurn).toHaveBeenCalledWith(0);
        this.game.roll();
        expect(this.fakeUI.move).toHaveBeenNthCalledWith(2, 0, 4);
        expect(this.fakeUI.update).toHaveBeenNthCalledWith(3, 0, {
            position: 8,
            money: 100000 - 80,
            properties: [],
        });
        expect(this.fakeUI.propose).toHaveBeenNthCalledWith(2, 0, {
            property: "이스탄불",
            price: 100,
        });
    }
}
//# sourceMappingURL=applicationRunner.js.map