import { movePlayer } from "../GUI/player.js";
import { createTurnIndicator, showPurchaseModal } from "../GUI/main.js";

interface playerState {
  position: number;
  money: number;
  properties: number[];
}

export class UI {
  move(playerIndex: number, n: number): void {
    movePlayer(playerIndex, n);
  }

  showTurn(turn: number): void {
    createTurnIndicator(turn);
  }

  propose(position: number): void {
    showPurchaseModal(position);
  }

  update(player: number, playerState: playerState): void {}
}
