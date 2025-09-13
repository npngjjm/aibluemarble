/**
 * 11x11 트랙 레이아웃의 부루마블 보드를 생성합니다.
 * @param {string} containerId - 보드를 담을 컨테이너의 ID
 */
export function createBoard(containerId = "game-board") {
  const size = 11;
  const boardContainer = document.createElement("div");
  boardContainer.id = containerId;

  // 부루마블 트랙 이름 배열 (시계방향)
  const trackNames = [
    "출발",
    "타이베이",
    "황금열쇠",
    "베이징",
    "마닐라",
    "제주도",
    "싱가포르",
    "카이로",
    "이스탄불",
    "아테네",
    "무인도",
    "코펜하겐",
    "스톡홀름",
    "베를린",
    "오타와",
    "황금열쇠",
    "상파울루",
    "부에노스아이레스",
    "리마",
    "시드니",
    "우주여행",
    "하노이",
    "방콕",
    "황금열쇠",
    "두바이",
    "요하네스버그",
    "카사블랑카",
    "마드리드",
    "런던",
    "파리",
    "로마",
    "황금열쇠",
    "모스크바",
    "도쿄",
    "홍콩",
    "황금열쇠",
    "하와이",
    "로스앤젤레스",
    "뉴욕",
    "사회복지기금",
  ];
  let trackIndex = 0;
  const trackCoordinates = []; // 각 칸의 좌표를 저장할 배열
  let playerPositions = []; // 플레이어의 위치를 저장할 배열

  // 보드 스타일 설정 (CSS Grid 사용)
  Object.assign(boardContainer.style, {
    display: "grid",
    gridTemplateRows: `repeat(${size}, 60px)`,
    gridTemplateColumns: `repeat(${size}, 60px)`,
    gap: "2px",
    backgroundColor: "#333",
    border: "2px solid #333",
    // 화면 중앙에 위치시키기
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  // 트랙 셀 생성 (시계방향, 시작점: 좌하단 -> 좌측 -> 상단 -> 우측 -> 하단)
  for (let i = 0; i < size * 4 - 4; i++) {
    const cell = document.createElement("div");
    cell.className = "board-cell";

    // 셀 스타일 설정
    Object.assign(cell.style, {
      backgroundColor: "ivory",
      border: "1px solid #999",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      textAlign: "center",
      padding: "2px",
      boxSizing: "border-box",
    });

    let row, col;

    if (i < size) {
      // 1. 좌측 (하 -> 상)
      row = size - 1 - i;
      col = 0;
    } else if (i < size * 2 - 1) {
      // 2. 상단 (좌 -> 우)
      row = 0;
      col = i - (size - 1);
    } else if (i < size * 3 - 2) {
      // 3. 우측 (상 -> 하)
      row = i - (size * 2 - 2);
      col = size - 1;
    } else {
      // 4. 하단 (우 -> 좌)
      row = size - 1;
      col = size - 1 - (i - (size * 3 - 3));
    }

    // 생성된 셀의 좌표 저장
    if (trackCoordinates.length < 40) {
      trackCoordinates.push({ row: row + 1, col: col + 1 });
    }

    cell.textContent = trackNames[trackIndex++] || ""; // 이름 할당
    cell.style.gridRow = row + 1;
    cell.style.gridColumn = col + 1;
    boardContainer.appendChild(cell);
  }

  // 기존 보드가 있다면 제거하고 새로 추가
  const existingBoard = document.getElementById(containerId);
  if (existingBoard) {
    existingBoard.remove();
  }
  document.body.appendChild(boardContainer);
  // 전역 변수로 좌표와 플레이어 위치를 설정
  window.trackCoordinates = trackCoordinates;
  window.playerPositions = playerPositions;
}

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
