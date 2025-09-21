import { properties } from "./constants.js";

interface UI {
  move(playerIndex: number, n: number): void;
  showTurn(player: number): void;
  propose(player: number, proposal: { property: string; price: number }): void;
  update(player: number, playerState: PlayerState): void;
}

interface PlayerState {
  position: number;
  money: number;
  properties: number[];
}

interface Dice {
  create(): void;
  isDouble(): boolean;
  getTotal(): number;
}

export class Game {
  private playerID: 0 | 1;
  private ui: UI;
  private playerPositions: number[];
  private propertyOwner: (number | null)[];
  private caches: number[];
  private properties: [string, number][];
  private playerProperties: number[][];
  private dice: Dice;
  private islandConstraint : number[];

  constructor(ui: UI, dice: Dice) {
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

  public roll(): void {
    this.dice.create();
    if(this.islandConstraint[this.playerID] > 0) {
      this.islandConstraint[this.playerID] -= 1;
      this.endTurn();
      return;
    }

    this.move(this.dice.getTotal());
    if( this.properties[this.currentPosition][0] === "무인도" ) {
      this.islandConstraint[this.playerID] = 3;
      this.endTurn();
    }
    else if (this.propertyOwner[this.currentPosition] === null) {
      this.ui.propose(this.playerID, {
        property: this.properties[this.currentPosition][0],
        price: this.properties[this.currentPosition][1],
      });
    } else {
      this.pay();
    }
  }

  public buy(): void {
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

  public doNotBuy(): void {
    this.endTurn();
  }

  private pay(): void {
    this.caches[this.playerID] -= this.properties[this.currentPosition][1];
    this.caches[this.propertyOwner[this.currentPosition] as number] += this.properties[this.currentPosition][1];
    this.ui.update(this.playerID, {
      position: this.currentPosition,
      money: this.caches[this.playerID],
      properties: this.playerProperties[this.playerID],
    });

    this.ui.update(this.propertyOwner[this.currentPosition] as number, {
      position: this.playerPositions[this.propertyOwner[this.currentPosition] as number],
      money: this.caches[this.propertyOwner[this.currentPosition] as number],
      properties: this.playerProperties[this.propertyOwner[this.currentPosition] as number],
    });

    this.endTurn();
  }

  private move(step: number): void {
    this.playerPositions[this.playerID] += step;
    this.playerPositions[this.playerID] %= 40;
    this.ui.move(this.playerID, step);
    this.ui.update(this.playerID, {
      position: this.currentPosition,
      money: this.caches[this.playerID],
      properties: [],
    });
  }

  private endTurn(): void {
    if(this.dice.isDouble() === true) {
      this.ui.showTurn(this.playerID);
      return;
    }

    if (this.playerID === 0) {
      this.playerID = 1;
    } else if (this.playerID === 1) {
      this.playerID = 0;
    }
    this.ui.showTurn(this.playerID);
  }

  get currentPosition(): number {
    return this.playerPositions[this.playerID];
  }
}