import { properties } from "./constants.js";
// test하는 실제 객체

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

class NormalDice {
  private die1: number;
  private die2: number;
  constructor() {
    this.die1 = 0;
    this.die2 = 0;
  }
  public create() {
    this.die1 = Math.floor(Math.random() * 6) + 1;
    this.die2 = Math.floor(Math.random() * 6) + 1;
  }

  public isDouble() {
    return this.die1 === this.die2;
  }

  getTotal() {
      return this.die1 + this.die2;
  }
}

export class Game {
  private player: 0 | 1;
  private ui: UI;
  private playerPositions: number[];
  private propertyOwner: (number | null)[];
  private caches: number[];
  private properties: [string, number][];
  private playerProperties: number[][];
  private dice: Dice;

  constructor(ui: UI, dice: Dice = new NormalDice()) {
    this.player = 0;
    this.ui = ui;
    this.playerPositions = [0, 0];
    this.properties = properties;
    this.propertyOwner = new Array(40).fill(null);
    this.caches = [100000, 100000];
    this.playerProperties = [[], []];
    this.dice = dice;
  }

  public roll(): void {
    this.dice.create();
    this.move(this.dice.getTotal());
    if (this.propertyOwner[this.currentPosition] === null) {
      this.ui.propose(this.player, {
        property: this.properties[this.currentPosition][0],
        price: this.properties[this.currentPosition][1],
      });
    } else {
      this.pay();
    }
  }

  public buy(): void {
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

  private pay(): void {
    this.caches[this.player] -= this.properties[this.currentPosition][1];
    this.ui.update(this.player, {
      position: this.currentPosition,
      money: this.caches[this.player],
      properties: this.playerProperties[this.player],
    });

    this.endTurn();
  }

  private move(step: number): void {
    this.playerPositions[this.player] += step;
    this.playerPositions[this.player] %= 40;
    this.ui.move(this.player, step);
    this.ui.update(this.player, {
      position: this.currentPosition,
      money: this.caches[this.player],
      properties: [],
    });
  }

  private endTurn(): void {
    if (this.player === 0) {
      this.player = 1;
    } else if (this.player === 1) {
      this.player = 0;
    }
    this.ui.showTurn(this.player);
  }

  get currentPosition(): number {
    return this.playerPositions[this.player];
  }
}
