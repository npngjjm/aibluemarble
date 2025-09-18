interface UI {
    move(playerIndex: number, n: number): void;
    showTurn(player: number): void;
    propose(position: number): void;
    update(playerState: playerState): void;
}
interface playerState {
    position: number;
    money: number;
    properties: number[];
}
export declare class Game {
    player: 0 | 1;
    ui: UI;
    playerPositions: number[];
    lands: (number | null)[];
    constructor(ui: UI);
    roll(): void;
    buy(): void;
    pay(): void;
    move(step: number): void;
}
export {};
//# sourceMappingURL=game.d.ts.map