interface UI {
    move(playerIndex: number, n: number): void;
    showTurn(player: number): void;
    propose(player: number, proposal: {
        property: string;
        price: number;
    }): void;
    update(player: number, playerState: PlayerState): void;
}
interface PlayerState {
    position: number;
    money: number;
    properties: number[];
}
interface Dice {
    create(): void;
    isDouble(): boolean;
    getTotal(): number;
}
export declare class Game {
    private player;
    private ui;
    private playerPositions;
    private propertyOwner;
    private caches;
    private properties;
    private playerProperties;
    private dice;
    constructor(ui: UI, dice?: Dice);
    roll(): void;
    buy(): void;
    private pay;
    private move;
    private endTurn;
    get currentPosition(): number;
}
export {};
//# sourceMappingURL=game.d.ts.map