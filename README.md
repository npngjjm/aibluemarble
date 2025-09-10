# Burumarble Game

## Overview
Burumarble is a web-based board game for two players, inspired by the classic game of Monopoly. The game features a standard game board, a dice-rolling mechanism, and player management. 

## Project Structure
The project consists of the following files:

```
burumarble-game
├── src
│   ├── index.js        # Entry point of the application, initializes the game board and players, sets up event listeners for the dice roll button.
│   ├── board.js        # Defines the structure and functionality of the game board, including cell creation and player position updates.
│   ├── dice.js         # Implements the dice rolling functionality and generates random dice values.
│   ├── player.js       # Manages player properties and behaviors, including name, position, and score.
│   └── styles
│       └── style.css   # Styles the visual elements of the game, including the board, players, and buttons.
├── index.html          # Defines the structure of the web page, including the game board, button, and display for dice values.
└── README.md           # Documentation for the project, including description and usage instructions.
```

## Getting Started
To run the Burumarble game, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd burumarble-game
   ```

3. Open `index.html` in your web browser to start playing the game.

## Usage
- Click the "Roll Dice" button to roll the dice and display the random value.
- Players take turns rolling the dice and moving around the board based on the rolled value.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.