/**
 * 11x11 트랙 레이아웃의 부루마블 보드를 생성합니다.
 * @param containerId - 보드를 담을 컨테이너의 ID
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
    const trackCoordinates = [];
    let playerPositions = [];
    // 보드 스타일 설정 (CSS Grid 사용)
    Object.assign(boardContainer.style, {
        display: "grid",
        gridTemplateRows: `repeat(${size}, 60px)`,
        gridTemplateColumns: `repeat(${size}, 60px)`,
        gap: "2px",
        backgroundColor: "#333",
        border: "2px solid #333",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    });
    // 트랙 셀 생성 (시계방향, 시작점: 좌하단 -> 좌측 -> 상단 -> 우측 -> 하단)
    for (let i = 0; i < size * 4 - 4; i++) {
        const cell = document.createElement("div");
        cell.className = "board-cell";
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
            row = size - 1 - i;
            col = 0;
        }
        else if (i < size * 2 - 1) {
            row = 0;
            col = i - (size - 1);
        }
        else if (i < size * 3 - 2) {
            row = i - (size * 2 - 2);
            col = size - 1;
        }
        else {
            row = size - 1;
            col = size - 1 - (i - (size * 3 - 3));
        }
        if (trackCoordinates.length < 40) {
            trackCoordinates.push({ row: row + 1, col: col + 1 });
        }
        cell.textContent = trackNames[trackIndex++] || "";
        cell.style.gridRow = row + 1;
        cell.style.gridColumn = col + 1;
        boardContainer.appendChild(cell);
    }
    const existingBoard = document.getElementById(containerId);
    if (existingBoard) {
        existingBoard.remove();
    }
    document.body.appendChild(boardContainer);
    // @ts-ignore: window 확장
    window.trackCoordinates = trackCoordinates;
    // @ts-ignore: window 확장
    window.playerPositions = playerPositions;
}
//# sourceMappingURL=board.js.map