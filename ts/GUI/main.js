import { createBoard } from "./board.js";
import { createPlayers, movePlayer } from "./player.js";
import { Game } from "../domain/game.js";
import { UI } from "../domain/ui.js";
const game = new Game(new UI());
createBoard();
createPlayers(2);
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
// 차례 표시용 div 생성
export function createTurnIndicator(turn) {
    let turnDiv = document.getElementById("turn-indicator");
    if (!turnDiv) {
        turnDiv = document.createElement("div");
        turnDiv.id = "turn-indicator";
        Object.assign(turnDiv.style, {
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 24px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: "101",
        });
        document.body.appendChild(turnDiv);
    }
    turnDiv.textContent = `현재 플레이어 차례: 플레이어 ${turn + 1}`;
}
export function showPurchaseModal(player, proposal) {
    const modal = document.getElementById("purchase-modal");
    const yesBtn = document.getElementById("purchase-yes");
    const noBtn = document.getElementById("purchase-no");
    const text = document.getElementById("purchase-modal-text");
    if (text)
        text.textContent = `${proposal.property}을(를) ${proposal.price}에 구매하시겠습니까?`;
    modal.style.display = "block";
    function closeModal() {
        modal.style.display = "none";
        yesBtn.removeEventListener("click", onYes);
        noBtn.removeEventListener("click", onNo);
    }
    function onYes() {
        game.buy();
        // window.dispatchEvent(
        //   new CustomEvent("land-purchase-result", {
        //     detail: { property, price, result: true },
        //   })
        // );
        closeModal();
    }
    function onNo() {
        // window.dispatchEvent(
        //   new CustomEvent("land-purchase-result", {
        //     detail: { property, price, result: false },
        //   })
        // );
        closeModal();
    }
    yesBtn.addEventListener("click", onYes);
    noBtn.addEventListener("click", onNo);
}
export function showPlayerState(player, state) {
    let infoDiv = document.getElementById("player-info");
    if (!infoDiv) {
        infoDiv = document.createElement("div");
        infoDiv.id = "player-info";
        Object.assign(infoDiv.style, {
            position: "fixed",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 24px",
            fontSize: "16px",
            backgroundColor: "#f8f9fa",
            color: "#333",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
            zIndex: "100",
        });
        document.body.appendChild(infoDiv);
    }
    infoDiv.innerHTML = `
    <b>플레이어 ${player + 1} 정보</b><br>
    위치: ${state.position} (${trackNames[state.position]})<br>
    돈: ${state.money}<br>
    소유한 땅: ${state.properties.map(idx => trackNames[idx]).join(", ") || "없음"}
  `;
}
createTurnIndicator(0);
/**
 * 주사위 굴리기 버튼을 생성하고 화면에 추가합니다.
 */
export function createDiceButton() {
    const button = document.createElement("button");
    button.textContent = "주사위 굴리기";
    Object.assign(button.style, {
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 24px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#28a745",
        color: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: "100",
    });
    button.addEventListener("click", () => {
        game.roll();
        createTurnIndicator(game.player);
    });
    document.body.appendChild(button);
}
createDiceButton();
//# sourceMappingURL=main.js.map