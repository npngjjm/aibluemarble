
/**
 * 플레이어를 생성하고 시작 위치에 배치합니다.
 * @param playerCount - 생성할 플레이어 수
 * @param boardId - 플레이어가 위치할 보드의 ID
 */
export function createPlayers(playerCount: number = 2, boardId: string = "game-board"): void {
	const board = document.getElementById(boardId);
	if (!board) {
		console.error("Board not found!");
		return;
	}

	// @ts-ignore: window 확장
	(window as any).playerPositions = [];

	const playerColors: string[] = ["#FF4136", "#0074D9"];

	// 시작 셀의 grid 위치 (좌하단)
	const startRow = 11;
	const startCol = 1;

	for (let i = 0; i < playerCount; i++) {
		// @ts-ignore: window 확장
		(window as any).playerPositions.push(0);
		const playerElement = document.createElement("div");
		playerElement.id = `player-${i}`;

		Object.assign(playerElement.style, {
			width: "25px",
			height: "25px",
			backgroundColor: playerColors[i % playerColors.length],
			borderRadius: "50%",
			border: "2px solid white",
			boxShadow: "0 0 5px rgba(0,0,0,0.5)",
			boxSizing: "border-box",
			gridRow: `${startRow}`,
			gridColumn: `${startCol}`,
			placeSelf: "center",
			zIndex: "10",
			transition: "all 0.4s ease-in-out",
		});

		const offsetX = i % 2 === 0 ? -10 : 10;
		const offsetY = i < 2 ? -10 : 10;
		playerElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

		board.appendChild(playerElement);
	}
}

/**
 * 지정된 플레이어를 주어진 칸 수만큼 이동시킵니다.
 * @param playerIndex - 이동할 플레이어의 인덱스 (0부터 시작)
 * @param steps - 이동할 칸 수
 */
export function movePlayer(playerIndex: number, steps: number): void {
	const playerElement = document.getElementById(`player-${playerIndex}`);
	if (!playerElement) {
		console.error(`Player ${playerIndex} not found!`);
		return;
	}

	// @ts-ignore: window 확장
	const playerPositions = (window as any).playerPositions;
	// @ts-ignore: window 확장
	const trackCoordinates = (window as any).trackCoordinates;
	const currentPosition = playerPositions[playerIndex];
	const newPosition = (currentPosition + steps) % 40;
	playerPositions[playerIndex] = newPosition;

	const newCoords = trackCoordinates[newPosition];
	playerElement.style.gridRow = newCoords.row;
	playerElement.style.gridColumn = newCoords.col;
}
