import { movePlayer } from "../GUI/player.js";
import {
  createTurnIndicator,
  showPurchaseModal,
  showPlayerState,
} from "../GUI/main.js";

interface PlayerState {
  position: number;
  money: number;
  properties: number[];
}

export class UI {
  move(playerIndex: number, step: number): void {
    movePlayer(playerIndex, step);
  }

  showTurn(turn: number): void {
    createTurnIndicator(turn);
  }

  propose(player: number, proposal: { property: string; price: number }): void {
    showPurchaseModal(player, proposal);
  }

  update(player: number, playerState: PlayerState): void {
    showPlayerState(player, playerState);
  }
}
