# Marky's BlackJack Casino
## A home for high rollers

<br>

Blackjack is my go-to game at the casino, so I thought it would be fun to recreate in a browser-based game. 

<br>
<br>

### Rules
In order to effectively design the win logic, I first set the parameters of the game to know how to proceed. These are the rules that I chose:
 - Dealer holds at 17 
 - Dealer's Blackjack always wins
 - It's a push if both players bust
 - No betting

<br>
<br>

## Gameplay
It was important to me that the game felt somewhat natural so I included timeouts for the initial deal and dealer play. This both gives the sense of playing a real game and allows the player to keep track of the dealer's score (and the logic behind their decisions) card-by-card.

<br>
<br>

## Screenshots
Here are some screenshots of my game:

### Start Board
![](/assets/Start%20Board.png)

<br>

### It's a Push
![](/assets/It's%20a%20push.png)

<br>

### Dealer Win
![](/assets/Dealer%20wins.png)

<br>

### Player Bust
![](/assets/Player%20bust.png)

<br>

### Player Blackjack
![](/assets/Player%20Blackjack.png)

<br>

### Dealer Blackjack
![](/assets/Dealer%20Blackjack.png)

<br>
<br>

## Technologies Used
In this project I used the following tools:
 - HTML
 - CSS
 - Javascript

<br>
<br>

## Play the game!

<button name="button" onclick="www.google.com">Launch Game</button>

<br>
<br>

## Icebox Features
In time, I would like to include the following features into the gameplay:
 - Betting<br>
    This would include:
   - A stack to show current amount of money/chips available
   - Player's ability to select bet amount
   - Variable betting odds based on card values <br>
   Please note that I have included grid areas for the chip stack and betting area in my CSS grid.
   
   <br>

- Enhanced play features<br>
    This would include:
   - Split: ability to split two of the same cards into two bets
   - Double-down: ability to double a bet and draw one additional card.<br>
   Please note that I have included grid areas for the split and double-down buttons in my CSS grid.

<br>

- Log player name so prompts are personalised<br>
- Time-delayed prompts based on player inaction<br>
- Choose the card design<br>
- Select the number of decks to draw from, including variable betting odds.<br>
- Play with multiple people<br>