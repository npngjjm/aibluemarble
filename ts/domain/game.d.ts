interface UI {
    move(playerIndex: number, n: number): void;
    showTurn(turn: number): void;
    propose(position: number): void;
    buy(player: number): void;
    pay(player: number): void;
}
export declare class Game {
    turn: 0 | 1;
    ui: UI;
    playerPositions: number[];
    lands: (number | null)[];
    constructor(ui: UI);
    roll(): void;
    buy(): void;
    pay(): void;
    move(turn: number, step: number): void;
}
export {};
//# sourceMappingURL=game.d.ts.map