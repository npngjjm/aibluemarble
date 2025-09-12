// player.js: 부루마블 플레이어 관리 및 움직임 API
import { createBoard, tileNames } from './board.js';

const players = [
  { name: 'P1', color: 'red', pos: 0, pawn: null },
  { name: 'P2', color: 'blue', pos: 0, pawn: null }
];

const cellDivs = createBoard();

// 플레이어 말 생성 및 출발 칸에 표시
players.forEach((player) => {
  const pawn = document.createElement('span');
  pawn.className = 'pawn';
  pawn.textContent = player.name;
  pawn.style.background = player.color;
  pawn.style.color = '#fff';
  pawn.style.borderRadius = '50%';
  pawn.style.padding = '2px 6px';
  pawn.style.margin = '1px';
  pawn.style.fontSize = '10px';
  pawn.style.display = 'inline-block';
  cellDivs[player.pos].appendChild(pawn);
  player.pawn = pawn;
});

// ===== Player 조작 API =====
window.BMPlayerAPI = {
  movePlayer(playerIdx, steps) {
    const player = players[playerIdx];
    if (!player) return;
    if (player.pawn.parentNode) player.pawn.parentNode.removeChild(player.pawn);
    player.pos = (player.pos + steps + cellDivs.length) % cellDivs.length;
    cellDivs[player.pos].appendChild(player.pawn);
  },
  getPlayerPosition(playerIdx) {
    const player = players[playerIdx];
    return player ? player.pos : null;
  },
  setPlayerPosition(playerIdx, pos) {
    const player = players[playerIdx];
    if (!player) return;
    if (player.pawn.parentNode) player.pawn.parentNode.removeChild(player.pawn);
    player.pos = ((pos % cellDivs.length) + cellDivs.length) % cellDivs.length;
    cellDivs[player.pos].appendChild(player.pawn);
  },
  resetPlayers() {
    players.forEach((player) => {
      if (player.pawn.parentNode) player.pawn.parentNode.removeChild(player.pawn);
      player.pos = 0;
      cellDivs[0].appendChild(player.pawn);
    });
  },
  getPlayerCount() {
    return players.length;
  },
  getTileNames() {
    return tileNames.slice();
  }
};
