import { properties } from "./constants.js";
export class Game {
    playerID;
    ui;
    playerPositions;
    propertyOwner;
    caches;
    properties;
    playerProperties;
    dice;
    islandConstraint;
    constructor(ui, dice) {
        this.playerID = 0;
        this.ui = ui;
        this.playerPositions = [0, 0];
        this.properties = properties;
        this.propertyOwner = new Array(40).fill(null);
        this.caches = [100000, 100000];
        this.playerProperties = [[], []];
        this.dice = dice;
        this.islandConstraint = [0, 0];
    }
    roll() {
        this.dice.create();
        if (this.dice.isDouble() === true) {
            this.islandConstraint[this.playerID] = 0;
        }
        if (this.islandConstraint[this.playerID] > 0) {
            this.islandConstraint[this.playerID] -= 1;
            this.endTurn();
            return;
        }
        this.move(this.dice.getTotal());
        if (this.properties[this.currentPosition][0] === "무인도") {
            this.islandConstraint[this.playerID] = 3;
            this.endTurn();
        }
        else if (this.propertyOwner[this.currentPosition] === null) {
            this.ui.propose(this.playerID, {
                property: this.properties[this.currentPosition][0],
                price: this.properties[this.currentPosition][1],
            });
        }
        else {
            this.pay();
        }
    }
    buy() {
        this.propertyOwner[this.currentPosition] = this.playerID;
        this.caches[this.playerID] -= this.properties[this.currentPosition][1];
        this.playerProperties[this.playerID].push(this.currentPosition);
        this.ui.update(this.playerID, {
            position: this.currentPosition,
            money: this.caches[this.playerID],
            properties: this.playerProperties[this.playerID],
        });
        this.endTurn();
    }
    doNotBuy() {
        this.endTurn();
    }
    pay() {
        this.caches[this.playerID] -= this.properties[this.currentPosition][1];
        this.caches[this.propertyOwner[this.currentPosition]] +=
            this.properties[this.currentPosition][1];
        this.ui.update(this.playerID, {
            position: this.currentPosition,
            money: this.caches[this.playerID],
            properties: this.playerProperties[this.playerID],
        });
        this.ui.update(this.propertyOwner[this.currentPosition], {
            position: this.playerPositions[this.propertyOwner[this.currentPosition]],
            money: this.caches[this.propertyOwner[this.currentPosition]],
            properties: this.playerProperties[this.propertyOwner[this.currentPosition]],
        });
        this.endTurn();
    }
    move(step) {
        this.playerPositions[this.playerID] += step;
        this.playerPositions[this.playerID] %= 40;
        this.ui.move(this.playerID, step);
        this.ui.update(this.playerID, {
            position: this.currentPosition,
            money: this.caches[this.playerID],
            properties: [],
        });
    }
    endTurn() {
        if (this.dice.isDouble() === true) {
            this.ui.showTurn(this.playerID);
            return;
        }
        if (this.playerID === 0) {
            this.playerID = 1;
        }
        else if (this.playerID === 1) {
            this.playerID = 0;
        }
        this.ui.showTurn(this.playerID);
    }
    get currentPosition() {
        return this.playerPositions[this.playerID];
    }
}
//# sourceMappingURL=game.js.map