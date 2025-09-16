import { movePlayer } from "../GUI/player.js";
import { createTurnIndicator, showPurchaseModal } from "../GUI/main.js";

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

	buy(player: number): void {}
	pay(player: number): void {}
}
