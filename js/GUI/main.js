import { createBoard } from "/js/GUI/board.js";
      import { createPlayers, movePlayer } from "/js/GUI/player.js";
      import { UI } from "/js/domain/ui.js";
      import { Game } from "/js/domain/game.js";

      const game = new Game(new UI()); // 기존 로직은 그대로 둡니다.
      createBoard(); // 보드 생성 함수 호출
      createPlayers(2); // 플레이어 2명 생성
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

        // 첫 번째 플레이어 차례 표시
        createTurnIndicator(0);
      /**
       * 주사위 굴리기 버튼을 생성하고 화면에 추가합니다.
       */
      export function createDiceButton() {
        const button = document.createElement("button");
        button.textContent = "주사위 굴리기";

        // 버튼 스타일 설정
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
          backgroundColor: "#28a745", // Green color
          color: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          zIndex: "100",
        });

        // 버튼 클릭 이벤트 리스너
        button.addEventListener("click", () => {
          game.roll();
            // 플레이어 차례 갱신 (플레이어 수 2명 기준)
            createTurnIndicator(game.turn);
        });

        document.body.appendChild(button);
      }

      createDiceButton(); // 주사위 버튼 생성 함수 호출