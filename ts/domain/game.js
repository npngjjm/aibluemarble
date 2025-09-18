export class Game {
    player;
    ui;
    playerPositions;
    lands;
    constructor(ui) {
        this.player = 0;
        this.ui = ui;
        this.playerPositions = [0, 0];
        this.lands = new Array(40).fill(null);
    }
    roll() {
        this.move(4);
        if (this.lands[this.playerPositions[this.player]] === null) {
            this.ui.propose(this.playerPositions[this.player]);
        }
        else {
            this.pay();
        }
    }
    buy() {
        this.lands[this.playerPositions[this.player]] = this.player;
        if (this.player === 0) {
            this.player = 1;
        }
        else if (this.player === 1) {
            this.player = 0;
        }
        this.ui.showTurn(this.player);
    }
    pay() {
        if (this.player === 0) {
            this.player = 1;
        }
        else if (this.player === 1) {
            this.player = 0;
        }
        this.ui.showTurn(this.player);
    }
    move(step) {
        this.playerPositions[this.player] += step;
        this.ui.move(this.player, step);
        this.ui.update({
            position: this.playerPositions[this.player],
            money: 0,
            properties: [],
        });
    }
}
//# sourceMappingURL=game.js.map