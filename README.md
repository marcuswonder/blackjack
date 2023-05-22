# Marky's Blackjack Casino
## A home for high rollers

<br>

## Overview
Blackjack is my go-to game at the casino, so I thought it would be fun to recreate in a browser-based game. 

In my planning materials, I laid out the following MVP and Icebox functionality:

<br>

### Minimum Viable Product
As a user, I must be able to:
<ul>
    <li>Play the game in the correct order (i.e. follow flow of the game)
    <li>Play the core playing functions (i.e. hit/hold)
    <li>See final scores and a message when I blackjack, win, lose or bust
    <li>Play again at the end of the game
</ul>

<br>

### Icebox
As a user, it would be nice to be able to:
<ul>
    <li>Start the game from a start page without playing elements
    <li>Log my name so prompts are personalised
    <li>Time-delayed prompts based on player inaction
    <li>Time-delayed dealer play
    <li>Allow betting in the game
    <li>See the amount of money in my chip stack
    <li>Choose my bet amount
    <li>Play the alternate playing functions (i.e. double-down/split)
    <li>Choose the card design
    <li>Select the number of decks to draw from, including variable betting odds.
    <li>Play with multiple people
</ul>

<br>
<br>

## Deployment Link
<a href="https://marcuswonder.github.io/project_1_blackjack/">Play Blackjack!</a>

<br>
<br>

## Getting Started
Simply click on the link above to get started. 

<br>

### Rules and Objectives of Blackjack
Objective: you must beat the dealer.

<br>

#### How do you beat the dealer?
<ul>
   <li>By drawing a hand value that is higher than the dealer’s hand value
   <li>By the dealer drawing a hand value that goes over 21.
   <li>By drawing a hand value of 21 on your first two cards, when the dealer does not.
</ul>

<br>

#### How do you lose to the dealer? 
<ul>
   <li>Your hand value exceeds 21.
   <li>The dealers hand has a greater value than yours at the end of the round
</ul>

<br>

House rules are below:
<ul>
   <li>Dealer holds at 17 
   <li>Player's bust always loses
   <li>No betting
</ul>

<br>
<br>

## Timeframe & Working Team
This was the first project assigned as part of my Software Engineering Immersive course at General Assembly; it was a solo project for which we were given 5 working days.

<br>
<br>

## Technologies Used
In this project I used the following tools:
<ul>
   <li>HTML
   <li>CSS
   <li>Javascript
</ul>

<br>
<br>

## Brief
We were issued the following brief from our instructors:
<br>

### Technical Requirements
<ul>
   <li>Render a game in the browser.
   <li>Include win/loss logic and render win/loss messages in HTML. Popup alerts using the alert() method are okay during development, but not production.
   <li>Include separate HTML, CSS & JavaScript files.
   <li>Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
   <li>No remaining dead and/or commented out code (code that will never be called).
   <li>Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.
   <li>Be coded in a consistent manner. For example, choose between your preference for function declarations vs. function expressions.
   <li>Deploy your game online using GitHub Pages so that the rest of the world can play your game!
</ul>

<br>
<br>

## Planning
Please find the planning document that I submitted to my tutors below:
 * [Planning Materials](https://docs.google.com/document/d/1NjuaIqT_Rz-RbeE1Gvj9_9UXUFmttEFOivcYE13ktgY/) 

<br>
<br>

## Build Process
I took the following process when building the game:
<ol>
   <li>Build the card array
   <li>Build the CSS grid on the front end
   <li>Build the play buttons
   <li>Code the event listeners
   <li>Build the gameplay logic
   <li>Build and code message box
   <li>Build and code player and dealer score messages
   <li>Style front end
   <li>Deploy to GitHub pages
   <li>Debug GitHub pages
</ol>
<br>
<br>

## Challenges
The biggest challenge was certainly getting the gameplay logic worked through and, particularly in staggering the logic so that the decision-making led to correct right win/lose decision-making as set out by my chosen rules.

That said, I was able to generate the logical steps to my desired outcome:
```JavaScript
function dealerPlayCheck() {
    if((checkPlayerCardClass('ace') === true && checkPlayerCardClass('picture') === true && cardsDealtToPlayer.length === 2) && (checkDealerCardClass('ace') === undefined || checkDealerCardClass('picture') === undefined || cardsDealtToDealer.length !== 2)) {
        renderMessage("Player has a Blackjack!")
        renderMessage2("Player wins")
        enableStartButton()
    } else if((checkDealerCardClass('ace') === true && checkDealerCardClass('picture') === true && cardsDealtToDealer.length === 2) && (checkPlayerCardClass('ace') === undefined || checkPlayerCardClass('picture') === undefined || cardsDealtToPlayer.length !== 2)) {
        renderMessage("Dealer has a Blackjack!")
        renderMessage2("Dealer wins")
        enableStartButton()
    } else if((checkDealerCardClass('ace') === true && checkDealerCardClass('picture') === true && cardsDealtToDealer.length === 2) && (checkPlayerCardClass('ace') === true && checkPlayerCardClass('picture') === true && cardsDealtToPlayer.length === 2)) {
        renderMessage("Both players have a Blackjack!")
        renderMessage2("It's a push")
        enableStartButton()
    } else if(dealerScore < 17) {
        dealerPlay()
    }else if(dealerScore > 21 && playerScore > 21) {
        renderMessage("Dealer and Player are bust!")
        renderMessage2("The player still loses!")
        enableStartButton()
    } else if(dealerScore > 21 && playerScore <= 21) {
        renderMessage("Dealer is bust!")
        renderMessage2(`Player Wins with ${playerScore}`)
        enableStartButton()
    } else if(dealerScore <= 21 && dealerScore >= 17 &&  playerScore > 21) {
        renderMessage("Player is bust!")
        renderMessage2(`Dealer Wins with ${dealerScore}`)
        enableStartButton()
    }else if(dealerScore >= 17 && dealerScore === playerScore) {
        renderMessage(`Both player and dealer have ${playerScore}`)
        renderMessage2("It's a push")
        enableStartButton()
    } else if(dealerScore >=17 && dealerScore > playerScore) {
        renderMessage(`Dealer wins with ${dealerScore}!`)
        renderMessage2(`Player has ${playerScore}`)
        enableStartButton()
    } else if(dealerScore >=17 && dealerScore < playerScore && playerScore <= 21) {
        renderMessage(`Player wins with ${playerScore}!`)
        renderMessage2(`Dealer has ${dealerScore}`)
        enableStartButton()
    }
}
```
<br>
<br>

## Wins
It was important to me that the game felt somewhat natural so I included timeouts for the initial deal and dealer play. This both gives the sense of playing a real game and allows the player to keep track of the dealer's score (and the logic behind their decisions) card-by-card.

```JavaScript
function startClick() {
    disableStartButton()
    init()
    randomCardDraw()
    sumCardsDealtToDealer()
    setTimeout(renderDealersCards,300)
    setTimeout(renderDealerBackCard,600)
    setTimeout(changeTurn,600)
    setTimeout(randomCardDraw,600)
    setTimeout(renderLastPlayersCard,900)
    setTimeout(randomCardDraw,1200)
    setTimeout(renderLastPlayersCard,1200)
    setTimeout(sumCardsDealtToPlayer,1200)
    setTimeout(checkPlayerBust,1200)
    setTimeout(function(){
        renderPlayerScore(playerScore)
    },1200)
    setTimeout(enableStartButton,1200)
}
```

<br>
<br>

## Key Takeaways
Since I had always hoped for this app to be mobile-friendly, building it following the mobile-first principle would have been a better way of approaching it.
<br>
<br>





## Bugs & Future Improvements
You can find a live tracker of my bug and improvement pipeline on cancan, my project-management app: <a href="https://cancan.herokuapp.com" target="blank">cancan.herokuapp.com</a>

Use the following credentials to log in to the app and navigate to "my boards", and visit the "Blackjack" board:

<ul>
    <li>User: guest@guest.com
    <li>Pass: guest
</ul>

 <br>
 <br>





