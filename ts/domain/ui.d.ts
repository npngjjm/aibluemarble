interface playerState {
    position: number;
    money: number;
    properties: number[];
}
export declare class UI {
    move(playerIndex: number, n: number): void;
    showTurn(turn: number): void;
    propose(position: number): void;
    update(player: number, playerState: playerState): void;
}
export {};
//# sourceMappingURL=ui.d.ts.map