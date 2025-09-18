import { Game } from "../ts/domain/game.js";
import type { Mock } from "vitest";
export declare class ApplicationRunner {
    fakeUI: {
        showTurn: Mock;
        move: Mock;
        propose: Mock;
        update: Mock;
    };
    game: Game;
    constructor();
    roll(): void;
    rollBuyRoll(): void;
}
//# sourceMappingURL=applicationRunner.d.ts.map