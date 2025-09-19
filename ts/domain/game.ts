import { properties } from "./constants.js";
// test하는 실제 객체

interface UI {
  move(playerIndex: number, n: number): void;
  showTurn(player: number): void;
  propose(player: number, proposal: {property : string, price: number}): void;
  update(player: number, playerState: playerState): void;
}

interface playerState {
  position: number;
  money: number;
  properties: number[];
}

export class Game {
  player: 0 | 1;
  ui: UI;
  playerPositions: number[];
  propertyOwner: (number | null)[];
  caches: number[];
  properties: [string, number][];
  playerProperties: number[][];

  constructor(ui: UI) {
    this.player = 0;
    this.ui = ui;
    this.playerPositions = [0, 0];
    this.properties = properties;
    this.propertyOwner = new Array(40).fill(null);
    this.caches = [100000, 100000];
    this.playerProperties = [[], []];
    this.ui.showTurn(this.player);
  }

  roll(): void {
    this.move(4);
    if (this.propertyOwner[this.playerPositions[this.player]] === null) {
      this.ui.propose(this.player, {property : this.properties[this.playerPositions[this.player]][0], price : this.properties[this.playerPositions[this.player]][1]});
    } else {
      this.pay();
    }
  }

  buy(): void {
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
    } else if (this.player === 1) {
      this.player = 0;
    }
    this.ui.showTurn(this.player);
  }

  pay(): void {
    this.caches[this.player] -= this.properties[this.playerPositions[this.player]][1];
    this.ui.update(this.player, {
      position: this.playerPositions[this.player],
      money: this.caches[this.player],
      properties: this.playerProperties[this.player],
    });

    if (this.player === 0) {
      this.player = 1;
    } else if (this.player === 1) {
      this.player = 0;
    }
    this.ui.showTurn(this.player);
  }

  move(step: number): void {
    this.playerPositions[this.player] += step;
    this.ui.move(this.player, step);
    this.ui.update(this.player, {
      position: this.playerPositions[this.player],
      money: this.caches[this.player],
      properties: [],
    });
  }
}
