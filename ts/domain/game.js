import { properties } from "./constants.js";
export class Game {
    player;
    ui;
    playerPositions;
    propertyOwner;
    caches;
    properties;
    playerProperties;
    constructor(ui) {
        this.player = 0;
        this.ui = ui;
        this.playerPositions = [0, 0];
        this.properties = properties;
        this.propertyOwner = new Array(40).fill(null);
        this.caches = [100000, 100000];
        this.playerProperties = [[], []];
        this.ui.showTurn(this.player);
    }
    roll() {
        this.move(4);
        if (this.propertyOwner[this.playerPositions[this.player]] === null) {
            this.ui.propose(this.player, { property: this.properties[this.playerPositions[this.player]][0], price: this.properties[this.playerPositions[this.player]][1] });
        }
        else {
            this.pay();
        }
    }
    buy() {
        this.propertyOwner[this.playerPositions[this.player]] = this.player;
        this.caches[this.player] -= this.properties[this.playerPositions[this.player]][1];
        this.playerProperties[this.player].push(this.playerPositions[this.player]);
        this.ui.update(this.player, {
            position: this.playerPositions[this.player],
            money: this.caches[this.player],
            properties: this.playerProperties[this.player],
        });
        if (this.player === 0) {
            this.player = 1;
        }
        else if (this.player === 1) {
            this.player = 0;
        }
        this.ui.showTurn(this.player);
    }
    pay() {
        this.caches[this.player] -= this.properties[this.playerPositions[this.player]][1];
        this.ui.update(this.player, {
            position: this.playerPositions[this.player],
            money: this.caches[this.player],
            properties: this.playerProperties[this.player],
        });
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
        this.ui.update(this.player, {
            position: this.playerPositions[this.player],
            money: this.caches[this.player],
            properties: [],
        });
    }
}
//# sourceMappingURL=game.js.map