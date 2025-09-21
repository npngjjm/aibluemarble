import type { Mock } from "vitest";
export declare class ApplicationRunner {
    fakeUI: {
        showTurn: Mock;
        move: Mock;
        propose: Mock;
        update: Mock;
    };
    fakeNormalDice: {
        getTotal: Mock;
        create: Mock;
        isDouble: Mock;
    };
    fakeDoubleDice: {
        getTotal: Mock;
        create: Mock;
        isDouble: Mock;
    };
    fakeNormalTenDice: {
        getTotal: Mock;
        create: Mock;
        isDouble: Mock;
    };
    constructor();
    roll(): void;
    rollBuyRoll(): void;
    rollDouble(): void;
    rollTen(): void;
    rollTenAndEscape(): void;
}
//# sourceMappingURL=applicationRunner.d.ts.map