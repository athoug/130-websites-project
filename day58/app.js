/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

// initialize game
init();



// button roll event handler
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. reandom number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. display the results
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            // show score
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

// add hold event handler
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add CURRENT sore to GLOBAL score
        scores[activePlayer] += roundScore;
        // update UI
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if(scores[activePlayer] >= 100) {
            // player won the game
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            // hide dice and activate winner pannel and hide actice
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            // change game state
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});

// new game handler
document.querySelector('.btn-new').addEventListener('click', init);


// game initialier
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // hide dice image for initial game
    document.querySelector('.dice').style.display = 'none';

    // reset score
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // reset player name
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // activate player panel
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // make first player active
    document.querySelector('.player-0-panel').classList.add('active');
}

// reset active player
function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset roundScore
    roundScore = 0;
    // reset the UI
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    // update player active pannel
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide dice
    document.querySelector('.dice').style.display = 'none';
}
