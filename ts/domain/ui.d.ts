interface PlayerState {
    position: number;
    money: number;
    properties: number[];
}
export declare class UI {
    move(playerIndex: number, step: number): void;
    showTurn(turn: number): void;
    propose(player: number, proposal: {
        property: string;
        price: number;
    }): void;
    update(player: number, playerState: PlayerState): void;
}
export {};
//# sourceMappingURL=ui.d.ts.map