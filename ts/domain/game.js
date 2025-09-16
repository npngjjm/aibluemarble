export class Game {
    turn;
    ui;
    playerPositions;
    lands;
    constructor(ui) {
        this.turn = 0;
        this.ui = ui;
        this.playerPositions = [0, 0];
        this.lands = new Array(40).fill(null);
    }
    roll() {
        this.move(this.turn, 4);
        if (this.lands[this.playerPositions[this.turn]] === null) {
            this.ui.propose(this.playerPositions[this.turn]);
        }
        else {
            this.ui.pay(this.turn);
        }
    }
    buy() {
        this.lands[this.playerPositions[this.turn]] = this.turn;
        this.ui.buy(this.turn);
        if (this.turn === 0) {
            this.turn = 1;
        }
        else if (this.turn === 1) {
            this.turn = 0;
        }
        this.ui.showTurn(this.turn);
    }
    pay() {
        if (this.turn === 0) {
            this.turn = 1;
        }
        else if (this.turn === 1) {
            this.turn = 0;
        }
        this.ui.showTurn(this.turn);
    }
    move(turn, step) {
        this.playerPositions[turn] += step;
        this.ui.move(turn, step);
    }
}
//# sourceMappingURL=game.js.map