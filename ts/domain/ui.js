import { movePlayer } from "../GUI/player.js";
import { createTurnIndicator, showPurchaseModal, showPlayerState } from "../GUI/main.js";
export class UI {
    move(playerIndex, step) {
        movePlayer(playerIndex, step);
    }
    showTurn(turn) {
        createTurnIndicator(turn);
    }
    propose(player, proposal) {
        showPurchaseModal(player, proposal);
    }
    update(player, playerState) {
        showPlayerState(player, playerState);
    }
}
//# sourceMappingURL=ui.js.map