// test하는 실제 객체
interface UI {
	move(playerIndex: number, n: number): void 
	showTurn(player: number): void 
	propose(position: number): void 
}
export class Game {
	turn: 0 | 1;
	ui: UI;
	playerPositions: number[];
	lands: (number | null)[];

	constructor(ui: UI) {
		this.turn = 0;
		this.ui = ui;
		this.playerPositions = [0,0];
		this.lands = new Array(40).fill(null);
	}

	roll(): void {
		this.move(4);
		if (this.lands[this.playerPositions[this.turn]] === null) {
			this.ui.propose(this.playerPositions[this.turn]);
		} else {
			this.pay();
		}
	}

	buy(): void {
		this.lands[this.playerPositions[this.turn]] = this.turn;

		if (this.turn === 0) {
			this.turn = 1;
		} else if (this.turn === 1) {
			this.turn = 0;
		}
		this.ui.showTurn(this.turn);
	}

	pay(): void {
		if (this.turn === 0) {
			this.turn = 1;
		} else if (this.turn === 1) {
			this.turn = 0;
		}
		this.ui.showTurn(this.turn);
	}

	move(step: number): void {
		this.playerPositions[this.turn] += step;
		this.ui.move(this.turn, step);
	}
}
