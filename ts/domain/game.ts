// test하는 실제 객체
interface UI {
  move(playerIndex: number, n: number): void;
  showTurn(player: number): void;
  propose(position: number): void;
  update(playerState: playerState): void;
}

interface playerState {
  position: number;
  money: number;
  properties: string[];
}

export class Game {
  player: 0 | 1;
  ui: UI;
  playerPositions: number[];
  lands: (number | null)[];

  constructor(ui: UI) {
    this.player = 0;
    this.ui = ui;
    this.playerPositions = [0, 0];
    this.lands = new Array(40).fill(null);
  }

  roll(): void {
    this.move(4);
    if (this.lands[this.playerPositions[this.player]] === null) {
      this.ui.propose(this.playerPositions[this.player]);
    } else {
      this.pay();
    }
  }

  buy(): void {
    this.lands[this.playerPositions[this.player]] = this.player;

    if (this.player === 0) {
      this.player = 1;
    } else if (this.player === 1) {
      this.player = 0;
    }
    this.ui.showTurn(this.player);
  }

  pay(): void {
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
    this.ui.update({
      position: this.playerPositions[this.player],
      money: 100000,
      properties: [],
    });
  }
}
