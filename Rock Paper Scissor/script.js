
        let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
        updateScoreElement();

        function pickComputerMove() {
            const moves = ['rock', 'paper', 'scissor'];
            return moves[Math.floor(Math.random() * 3)];
        }

        function updateScoreElement() {
            document.querySelector('.js-score').textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function playGame(userMove) {
            let computerMove = pickComputerMove();
            let result = '';
            
            if (userMove === computerMove) {
                result = "It's a tie!";
                score.ties++;
            } else if (
                (userMove === 'rock' && computerMove === 'scissor') ||
                (userMove === 'paper' && computerMove === 'rock') ||
                (userMove === 'scissor' && computerMove === 'paper')
            ) {
                result = "You won!";
                score.wins++;
            } else {
                result = "You lost!";
                score.losses++;
            }
            
            localStorage.setItem('score', JSON.stringify(score));
            updateScoreElement();
            
            document.querySelector('.js-moves').innerHTML = `
                <img src="Image/${userMove}.png" alt="Your move">
                <span>vs</span>
                <img src="Image/${computerMove}.png" alt="Computer move">
            `;
            document.querySelector('.js-result').textContent = result;
        }

        function resetScore() {
            localStorage.removeItem('score');
            score = { wins: 0, losses: 0, ties: 0 };
            updateScoreElement();
        }
    