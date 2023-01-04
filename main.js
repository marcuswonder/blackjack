const cards = [
    {name: '2Hearts', value: 2, suit: 'hearts', cardClass: 'number', render: 'h02'},
    {name: '3Hearts', value: 3, suit: 'hearts', cardClass: 'number', render: 'h03'},
    {name: '4Hearts', value: 4, suit: 'hearts', cardClass: 'number', render: 'h04'},
    {name: '5Hearts', value: 5, suit: 'hearts', cardClass: 'number', render: 'h05'},
    {name: '6Hearts', value: 6, suit: 'hearts', cardClass: 'number', render: 'h06'},
    {name: '7Hearts', value: 7, suit: 'hearts', cardClass: 'number', render: 'h07'},
    {name: '8Hearts', value: 8, suit: 'hearts', cardClass: 'number', render: 'h08'},
    {name: '9Hearts', value: 9, suit: 'hearts', cardClass: 'number', render: 'h09'},
    {name: '10Hearts', value: 10, suit: 'hearts', cardClass: 'number', render: 'h10'},
    {name: 'jackHearts', value: 10, suit: 'hearts', cardClass: 'picture', render: 'hJ'},
    {name: 'queenHearts', value: 10, suit: 'hearts', cardClass: 'picture', render: 'hQ'},
    {name: 'kingHearts', value: 10, suit: 'hearts', cardClass: 'picture', render: 'hK'},
    {name: 'aceHearts', value: 11, suit: 'hearts', cardClass: 'ace', render: 'hA'},
    
    {name: '2Spades', value: 2, suit: 'spades', cardClass: 'number', render: 's02'},
    {name: '3Spades', value: 3, suit: 'spades', cardClass: 'number', render: 's03'},
    {name: '4Spades', value: 4, suit: 'spades', cardClass: 'number', render: 's04'},
    {name: '5Spades', value: 5, suit: 'spades', cardClass: 'number', render: 's05'},
    {name: '6Spades', value: 6, suit: 'spades', cardClass: 'number', render: 's06'},
    {name: '7Spades', value: 7, suit: 'spades', cardClass: 'number', render: 's07'},
    {name: '8Spades', value: 8, suit: 'spades', cardClass: 'number', render: 's08'},
    {name: '9Spades', value: 9, suit: 'spades', cardClass: 'number', render: 's09'},
    {name: '10Spades', value: 10, suit: 'spades', cardClass: 'number', render: 's10'},
    {name: 'jackSpades', value: 10, suit: 'spades', cardClass: 'picture', render: 'sJ'},
    {name: 'queenSpades', value: 10, suit: 'spades', cardClass: 'picture', render: 'sQ'},
    {name: 'kingSpades', value: 10, suit: 'spades', cardClass: 'picture', render: 'sK'},
    {name: 'aceSpades', value: 11, suit: 'spades', cardClass: 'ace', render: 'sA'},
    
    {name: '2Clubs', value: 2, suit: 'clubs', cardClass: 'number', render: 'c02'},
    {name: '3Clubs', value: 3, suit: 'clubs', cardClass: 'number', render: 'c03'},
    {name: '4Clubs', value: 4, suit: 'clubs', cardClass: 'number', render: 'c04'},
    {name: '5Clubs', value: 5, suit: 'clubs', cardClass: 'number', render: 'c05'},
    {name: '6Clubs', value: 6, suit: 'clubs', cardClass: 'number', render: 'c06'},
    {name: '7Clubs', value: 7, suit: 'clubs', cardClass: 'number', render: 'c07'},
    {name: '8Clubs', value: 8, suit: 'clubs', cardClass: 'number', render: 'c08'},
    {name: '9Clubs', value: 9, suit: 'clubs', cardClass: 'number', render: 'c09'},
    {name: '10Clubs', value: 10, suit: 'clubs', cardClass: 'number', render: 'c10'},
    {name: 'jackClubs', value: 10, suit: 'clubs', cardClass: 'picture', render: 'cJ'},
    {name: 'queenClubs', value: 10, suit: 'clubs', cardClass: 'picture', render: 'cQ'},
    {name: 'kingClubs', value: 10, suit: 'clubs', cardClass: 'picture', render: 'cK'},
    {name: 'aceClubs', value: 11, suit: 'clubs', cardClass: 'ace', render: 'cA'},
    
    {name: '2Diamonds', value: 2, suit: 'diamonds', cardClass: 'number', render: 'd02'},
    {name: '3Diamonds', value: 3, suit: 'diamonds', cardClass: 'number', render: 'd03'},
    {name: '4Diamonds', value: 4, suit: 'diamonds', cardClass: 'number', render: 'd04'},
    {name: '5Diamonds', value: 5, suit: 'diamonds', cardClass: 'number', render: 'd05'},
    {name: '6Diamonds', value: 6, suit: 'diamonds', cardClass: 'number', render: 'd06'},
    {name: '7Diamonds', value: 7, suit: 'diamonds', cardClass: 'number', render: 'd07'},
    {name: '8Diamonds', value: 8, suit: 'diamonds', cardClass: 'number', render: 'd08'},
    {name: '9Diamonds', value: 9, suit: 'diamonds', cardClass: 'number', render: 'd09'},
    {name: '10Diamonds', value: 10, suit: 'diamonds', cardClass: 'number', render: 'd10'},
    {name: 'jackDiamonds', value: 10, suit: 'diamonds', cardClass: 'picture', render: 'dJ'},
    {name: 'queenDiamonds', value: 10, suit: 'diamonds', cardClass: 'picture', render: 'dQ'},
    {name: 'kingDiamonds', value: 10, suit: 'diamonds', cardClass: 'picture', render: 'dK'},
    {name: 'aceDiamonds', value: 11, suit: 'diamonds', cardClass: 'ace', render: 'dA'}
]

let cardsDealtToPlayer = []
let cardsDealtToDealer = []
let playerScore = 0
let dealerScore = 0
let randomCard = null

// Game States -- Game States -- Game States -- Game States -- Game States //
let turn

/*----- cached element references -----*/
const startBtnEl = document.querySelector('.start-button')
const hitBtnEl = document.querySelector('.hit-button')
const holdBtnEl = document.querySelector('.hold-button')
const messageEl = document.querySelector('.message')
const messageEl2 = document.querySelector('.message-2')
const dealerCardsEl = document.querySelector('.dealer-cards')
const playerCardsEl = document.querySelector('.player-cards')
let dealerScoreEl = document.querySelector('.score-dealer-score')
let playerScoreEl = document.querySelector('.score-player-score')
const playButtonTitle = document.querySelector('.play-buttons')

// Event Listeners -- Event Listeners -- Event Listeners -- Event Listeners -- Event Listeners //
startBtnEl.addEventListener('click', startClick)
hitBtnEl.addEventListener('click',hitClick)
holdBtnEl.addEventListener('click', holdClick)

/*----- functions -----*/
function init() {
    turn = -1
    playerScore = 0
    dealerScore = 0
    cards.push(...cardsDealtToDealer, ...cardsDealtToPlayer)
    cardsDealtToPlayer = []
    cardsDealtToDealer = []
    renderPlayerScore("")
    renderDealerScore("")
    playerCardsEl.innerHTML = ''
    dealerCardsEl.innerHTML = ''
    messageEl.innerText = ''
    messageEl2.innerText = ''
    hitBtnEl.style.visibility = ''
    holdBtnEl.style.visibility = ''
    playButtonTitle.style.visibility = ''
    startBtnEl.innerText = "Restart"
}

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

function renderPlayersCards() {
    let html = ''
    cardsDealtToPlayer.forEach(function(card) {
        const dealtPlayerCardEl = document.createElement('div')
        html += `<div class="card"></div>`
        playerCardsEl.appendChild(dealtPlayerCardEl)
        dealtPlayerCardEl.classList.add(card.render)
        dealtPlayerCardEl.classList.add('card')
    })
}

function renderLastPlayersCard() {
    let html = ''
    let lastPlayerCard = cardsDealtToPlayer[cardsDealtToPlayer.length - 1]
    const dealtPlayerCardEl = document.createElement('div')
    html += `<div class="card"></div>`
    playerCardsEl.appendChild(dealtPlayerCardEl)
    dealtPlayerCardEl.classList.add(lastPlayerCard.render)
    dealtPlayerCardEl.classList.add('card')
  }

function renderDealerBackCard () {
    const dealtDealerCardEl = document.createElement('div')
        dealerCardsEl.appendChild(dealtDealerCardEl)
        dealtDealerCardEl.classList.add('back-blue')
        dealtDealerCardEl.classList.add('card')
}

function turnDealerBackCard () {
    if(turn === -1) {
        dealerCardsEl.removeChild(dealerCardsEl.lastChild)
        randomCardDraw()
        renderLastDealersCard()
        sumCardsDealtToDealer()
        dealerPlayCheck()
        renderScores()
    }
}

function disableStartButton() {
    startBtnEl.setAttribute('disabled',true)
}

function enableStartButton() {
    startBtnEl.removeAttribute('disabled')
}

function renderDealersCards() {
    let html = ''
    cardsDealtToDealer.forEach(function(card) {
        const dealtDealerCardEl = document.createElement('div')
        html += `<div class="card"></div>`
        dealerCardsEl.appendChild(dealtDealerCardEl)
        dealtDealerCardEl.classList.add(card.render)  
        dealtDealerCardEl.classList.add('card')
    })
}

function renderLastDealersCard() {
    let html = ''
    let lastDealerCard = cardsDealtToDealer[cardsDealtToDealer.length - 1]
    const dealtDealerCardEl = document.createElement('div')
    html += `<div class="card"></div>`
    dealerCardsEl.appendChild(dealtDealerCardEl)
    dealtDealerCardEl.classList.add(lastDealerCard.render)
    dealtDealerCardEl.classList.add('card')
  }

function renderScores() {
    renderPlayerScore(playerScore)
    renderDealerScore(dealerScore)
}

function renderPlayerScore(playerScore) {
    playerScoreEl.innerText = playerScore
}

function renderDealerScore(dealerScore) {
    dealerScoreEl.innerText = dealerScore
}

function renderMessage(message) {
    messageEl.innerText = message
}

function renderMessage2(message) {
    messageEl2.innerText = message
}

function hitClick(){
    hitBtnEl.onclick = randomCardDraw()
    sumCardsDealtToPlayer()
    checkPlayerBust()
    renderPlayerScore(playerScore)
    renderLastPlayersCard()
}

function holdClick() {
    changeTurn()
    hidePlayButtons()
    setTimeout(turnDealerBackCard,300)
}

function changeTurn() {
    turn *= -1
}

function dealerPlayCheck() {
    if((checkPlayerCardClass('ace') === true && checkPlayerCardClass('picture') === true && cardsDealtToPlayer.length === 2) && (checkDealerCardClass('ace') === undefined || checkDealerCardClass('picture') === undefined && cardsDealtToDealer.length !== 2)) {
        renderMessage("Player has a Blackjack!")
        renderMessage2("Player wins")
        enableStartButton()
    } else if((checkDealerCardClass('ace') === true && checkDealerCardClass('picture') === true && cardsDealtToDealer.length === 2) && (checkPlayerCardClass('ace') === undefined || checkPlayerCardClass('picture') === undefined && cardsDealtToPlayer.length !== 2)) {
        renderMessage("Dealer has a Blackjack!")
        renderMessage2("Dealer wins")
        enableStartButton()
    } else if((checkDealerCardClass('ace') === true && checkDealerCardClass('picture') === true && cardsDealtToDealer.length === 2) && (checkPlayerCardClass('ace') === true && checkPlayerCardClass('picture') === true && cardsDealtToPlayer.length === 2)) {
        renderMessage("Both players have a Blackjack!")
        renderMessage2("Dealer wins")
        enableStartButton()
    } else if(dealerScore < 17) {
        dealerPlay()
    }else if(dealerScore > 21 && playerScore > 21) {
        renderMessage("Dealer and Player are bust!")
        renderMessage2("It's a push")
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

function dealerPlay() {
    renderMessage("Dealer's play")
    disableStartButton()
    randomCardDraw()
    setTimeout(renderLastDealersCard,2000)
    setTimeout(sumCardsDealtToDealer,2000)
    setTimeout(dealerPlayCheck,2000)
    setTimeout(renderScores,2000)
    setTimeout(startBtnEl.style.visibility = '',2000)
}

function randomCardDraw() {
    randomCard = cards[Math.floor(Math.random()*cards.length)]
    let randomCardIndex = cards.indexOf(randomCard)
        cards.splice(randomCardIndex, 1)
    if(turn === 1) {
        cardsDealtToPlayer.push(randomCard)
    } else if(turn === -1) {
        cardsDealtToDealer.push(randomCard)
    }
}

function countCardClass(array, key, value) {
  return array.reduce((acc, obj) => (obj[key] === value ? acc + 1 : acc), 0)
}

function hidePlayButtons() {
    hitBtnEl.style.visibility = 'hidden'
    holdBtnEl.style.visibility = 'hidden'
    playButtonTitle.style.visibility = 'hidden'
}

function sumCardsDealtToDealer() {
    var cardsDealtToDealerTotal = cardsDealtToDealer.reduce(function(previousValue, currentValue) {
    return {
      value: previousValue.value + currentValue.value
    }
  })
  dealerScore = cardsDealtToDealerTotal.value
  dealerAceValue()
}

function dealerAceValue() {
    if(dealerScore > 21 & (countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 1)) {
        dealerScore = dealerScore - 10
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 2 && (dealerScore - 10) <= 21 ) {
        dealerScore = dealerScore - 10
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 2 && (dealerScore - 20) <= 21 ) {
        dealerScore = dealerScore - 20
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 3 && (dealerScore - 10) <= 21) {
        dealerScore = dealerScore - 10
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 3 && (dealerScore - 20) <= 21) {
        dealerScore = dealerScore - 20
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 3 && (dealerScore - 30) <= 21) {
        dealerScore = dealerScore - 30
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 4 && (dealerScore - 10) <= 21) {
        dealerScore = dealerScore - 10
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 4 && (dealerScore - 20) <= 21) {
        dealerScore = dealerScore - 20
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 4 && (dealerScore - 30) <= 21) {
        dealerScore = dealerScore - 30
    } else if(dealerScore > 21 && countCardClass(cardsDealtToDealer, 'cardClass', 'ace') === 4 && (dealerScore - 40) <= 21) {
        dealerScore = dealerScore - 40
    }
}

function checkDealerCardClass(cardClass) {
    if(cardsDealtToDealer.find(item => item.cardClass  === cardClass)) return true
}

function sumCardsDealtToPlayer() {
    var cardsDealtToPlayerTotal = cardsDealtToPlayer.reduce(function(previousValue, currentValue) {
        return {
        value: previousValue.value + currentValue.value
        }
    })
    playerScore = cardsDealtToPlayerTotal.value
    playerAceValue()
}

function playerAceValue() {
    if(playerScore > 21 & (countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 1)) {
        playerScore = playerScore - 10
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 2 && (playerScore - 10) <= 21 ) {
        playerScore = playerScore - 10
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 2 && (playerScore - 20) <= 21 ) {
        playerScore = playerScore - 20
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 3 && (playerScore - 10) <= 21) {
        playerScore = playerScore - 10
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 3 && (playerScore - 20) <= 21) {
        playerScore = playerScore - 20
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 3 && (playerScore - 30) <= 21) {
        playerScore = playerScore - 30
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 4 && (playerScore - 10) <= 21) {
        playerScore = playerScore - 10
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 4 && (playerScore - 20) <= 21) {
        playerScore = playerScore - 20
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 4 && (playerScore - 30) <= 21) {
        playerScore = playerScore - 30
    } else if(playerScore > 21 && countCardClass(cardsDealtToPlayer, 'cardClass', 'ace') === 4 && (playerScore - 40) <= 21) {
        playerScore = playerScore - 40
    }
}

function checkPlayerCardClass(cardClass) {
    if(cardsDealtToPlayer.find(item => item.cardClass === cardClass)) return true
}

function checkPlayerBust() {
    if (playerScore > 21) {
        renderMessage("Player is Bust!")
        renderMessage2("Dealer must hit 17 to win")
        changeTurn()
        turnDealerBackCard()
        sumCardsDealtToDealer()
        renderPlayerScore()
        hidePlayButtons()
        return
    }
}