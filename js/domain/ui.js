export { UI };
import { movePlayer } from "/js/GUI/player.js";
import { createTurnIndicator, showPurchaseModal } from "/js/GUI/main.js";
class UI {
  move(playerIndex, n) {
    movePlayer(playerIndex, n);
  }

  showTurn(turn) {
    createTurnIndicator(turn);
  }

  propose(position) {
    showPurchaseModal(position);
  }
}
