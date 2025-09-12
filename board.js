// board.js: 10x10 부루마블 게임판 생성 및 칸 이름 표시

// board.js: 도넛(테두리만) 형태의 10x10 부루마블 게임판 생성


// board.js: 10x10 부루마블 게임판 생성 및 칸 이름 배열 export

export const tileNames = [
  '출발', '타이베이', '황금열쇠', '베이징', '마닐라', '황금열쇠', '싱가포르', '카이로', '이스탄불', '제네바',
  '두바이', '무인도', '황금열쇠', '퀸 엘리자베스호', '사회복지기금', '황금열쇠', '부산', '하와이',
  '아테네', '퀸스타운', '부에노스아이레스', '시드니', '상파울루', '황금열쇠', '오타와', '베를린', '황금열쇠', '스톡홀름', '코펜하겐',
  '사회복지기금', '상하이', '황금열쇠', '홍콩', '도쿄', '황금열쇠', '하노이', '방콕'
];

export function createBoard() {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = 'board';
  const cellDivs = [];
  let idx = 0;
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (row === 0 || row === 9 || col === 0 || col === 9) {
        const name = tileNames[idx] || '';
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = name ? `cell-${name.replace(/[^\w가-힣]/g, '_')}` : `cell-${row}-${col}`;
        cell.textContent = name;
        board.appendChild(cell);
        cellDivs.push(cell);
        idx++;
      } else {
        const empty = document.createElement('div');
        empty.className = 'cell empty';
        empty.style.background = 'transparent';
        empty.style.border = 'none';
        board.appendChild(empty);
      }
    }
  }
  document.body.appendChild(board);
  return cellDivs;
}
