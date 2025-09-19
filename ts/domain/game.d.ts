interface UI {
    move(playerIndex: number, n: number): void;
    showTurn(player: number): void;
    propose(player: number, proposal: {
        property: string;
        price: number;
    }): void;
    update(player: number, playerState: playerState): void;
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
    propertyOwner: (number | null)[];
    caches: number[];
    properties: [string, number][];
    playerProperties: number[][];
    constructor(ui: UI);
    roll(): void;
    buy(): void;
    pay(): void;
    move(step: number): void;
}
export {};
//# sourceMappingURL=game.d.ts.map