import { properties } from "./constants.js";
class NormalDice {
    die1;
    die2;
    constructor() {
        this.die1 = 0;
        this.die2 = 0;
    }
    create() {
        this.die1 = Math.floor(Math.random() * 6) + 1;
        this.die2 = Math.floor(Math.random() * 6) + 1;
    }
    isDouble() {
        return this.die1 === this.die2;
    }
    getTotal() {
        return this.die1 + this.die2;
    }
}
export class Game {
    player;
    ui;
    playerPositions;
    propertyOwner;
    caches;
    properties;
    playerProperties;
    dice;
    constructor(ui, dice = new NormalDice()) {
        this.player = 0;
        this.ui = ui;
        this.playerPositions = [0, 0];
        this.properties = properties;
        this.propertyOwner = new Array(40).fill(null);
        this.caches = [100000, 100000];
        this.playerProperties = [[], []];
        this.dice = dice;
    }
    roll() {
        this.dice.create();
        this.move(this.dice.getTotal());
        if (this.propertyOwner[this.currentPosition] === null) {
            this.ui.propose(this.player, {
                property: this.properties[this.currentPosition][0],
                price: this.properties[this.currentPosition][1],
            });
        }
        else {
            this.pay();
        }
    }
    buy() {
        this.propertyOwner[this.currentPosition] = this.player;
        this.caches[this.player] -= this.properties[this.currentPosition][1];
        this.playerProperties[this.player].push(this.currentPosition);
        this.ui.update(this.player, {
            position: this.currentPosition,
            money: this.caches[this.player],
            properties: this.playerProperties[this.player],
        });
        this.endTurn();
    }
    pay() {
        this.caches[this.player] -= this.properties[this.currentPosition][1];
        this.ui.update(this.player, {
            position: this.currentPosition,
            money: this.caches[this.player],
            properties: this.playerProperties[this.player],
        });
        this.endTurn();
    }
    move(step) {
        this.playerPositions[this.player] += step;
        this.playerPositions[this.player] %= 40;
        this.ui.move(this.player, step);
        this.ui.update(this.player, {
            position: this.currentPosition,
            money: this.caches[this.player],
            properties: [],
        });
    }
    endTurn() {
        if (this.player === 0) {
            this.player = 1;
        }
        else if (this.player === 1) {
            this.player = 0;
        }
        this.ui.showTurn(this.player);
    }
    get currentPosition() {
        return this.playerPositions[this.player];
    }
}
//# sourceMappingURL=game.js.map