import { movePlayer } from "../GUI/player.js";
import { createTurnIndicator, showPurchaseModal } from "../GUI/main.js";
export class UI {
    move(playerIndex, n) {
        movePlayer(playerIndex, n);
    }
    showTurn(turn) {
        createTurnIndicator(turn);
    }
    propose(player, proposal) {
        // showPurchaseModal(proposal);
    }
    update(player, playerState) { }
}
//# sourceMappingURL=ui.js.map