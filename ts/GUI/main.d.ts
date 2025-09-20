interface PlayerState {
    position: number;
    money: number;
    properties: number[];
}
export declare function createTurnIndicator(turn: number): void;
export declare function showPurchaseModal(player: number, proposal: {
    property: string;
    price: number;
}): void;
export declare function showPlayerState(player: number, state: PlayerState): void;
/**
 * 주사위 굴리기 버튼을 생성하고 화면에 추가합니다.
 */
export declare function createDiceButton(): void;
export {};
//# sourceMappingURL=main.d.ts.map