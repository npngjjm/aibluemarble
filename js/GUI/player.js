/**
 * 플레이어를 생성하고 시작 위치에 배치합니다.
 * @param {number} playerCount - 생성할 플레이어 수
 * @param {string} boardId - 플레이어가 위치할 보드의 ID
 */
export function createPlayers(playerCount = 2, boardId = "game-board") {
  const board = document.getElementById(boardId);
  if (!board) {
    console.error("Board not found!");
    return;
  }

  window.playerPositions = []; // 플레이어 생성 시 위치 초기화

  const playerColors = ["#FF4136", "#0074D9"]; // Player 1: Red, Player 2: Blue

  // 시작 셀의 grid 위치 (좌하단)
  const startRow = 11;
  const startCol = 1;

  for (let i = 0; i < playerCount; i++) {
    window.playerPositions.push(0); // 모든 플레이어는 0번 인덱스에서 시작
    const playerElement = document.createElement("div");
    playerElement.id = `player-${i}`; // 각 플레이어에게 고유 ID 부여

    // 플레이어 스타일 설정
    Object.assign(playerElement.style, {
      width: "25px",
      height: "25px",
      backgroundColor: playerColors[i % playerColors.length],
      borderRadius: "50%",
      border: "2px solid white",
      boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      boxSizing: "border-box",
      // grid 위치 설정
      gridRow: `${startRow}`,
      gridColumn: `${startCol}`,
      // 셀 내에서 중앙 정렬 및 겹침 방지
      placeSelf: "center",
      zIndex: "10",
      transition: "all 0.4s ease-in-out",
    });

    // 여러 플레이어가 겹치지 않도록 위치 조정
    const offsetX = i % 2 === 0 ? -10 : 10;
    const offsetY = i < 2 ? -10 : 10;
    playerElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    board.appendChild(playerElement);
  }
}

/**
 * 지정된 플레이어를 주어진 칸 수만큼 이동시킵니다.
 * @param {number} playerIndex - 이동할 플레이어의 인덱스 (0부터 시작)
 * @param {number} steps - 이동할 칸 수
 */
export function movePlayer(playerIndex, steps) {
  const playerElement = document.getElementById(`player-${playerIndex}`);
  if (!playerElement) {
    console.error(`Player ${playerIndex} not found!`);
    return;
  }

  // 현재 위치에서 steps만큼 더하고, 전체 칸 수(40)로 나눈 나머지를 구해 새 위치 계산
  const currentPosition = window.playerPositions[playerIndex];
  const newPosition = (currentPosition + steps) % 40;
  window.playerPositions[playerIndex] = newPosition;

  // 새 위치에 해당하는 좌표 가져오기
  const newCoords = window.trackCoordinates[newPosition];

  // 플레이어의 grid 위치 업데이트
  playerElement.style.gridRow = newCoords.row;
  playerElement.style.gridColumn = newCoords.col;
}
