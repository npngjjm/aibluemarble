import { movePlayer } from "../GUI/player.js";
import { createTurnIndicator, showPurchaseModal } from "../GUI/main.js";
export class UI {
    move(playerIndex, n) {
        movePlayer(playerIndex, n);
    }
    showTurn(turn) {
        createTurnIndicator(turn);
    }
    propose(position) {
        showPurchaseModal(position);
    }
    upadate(playerState) { }
}
//# sourceMappingURL=ui.js.map