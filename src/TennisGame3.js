const TennisGame3 = function (name1, name2) {
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;

  this.namePlayer1 = name1;
  this.namePlayer2 = name2;
};

function getPlayerScoreAsText(points) {
  const scoreAsText = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  return scoreAsText[points];
}

function getFinalScore(scorePlayer1, scorePlayer2) {
  const isTied = scorePlayer1 === scorePlayer2;
  if (isTied) {
    return scorePlayer1 + '-All';
  }
  return scorePlayer1 + '-' + scorePlayer2;
}

TennisGame3.prototype.getScore = function () {
  const isTied = this.scorePlayer1 === this.scorePlayer2;
  if ((this.scorePlayer1 < 4 && this.scorePlayer2 < 4) && (this.scorePlayer1 + this.scorePlayer2 < 6)) {
    const scorePlayer1 = getPlayerScoreAsText(this.scorePlayer1);
    const scorePlayer2 = getPlayerScoreAsText(this.scorePlayer2);
    return getFinalScore(scorePlayer1, scorePlayer2);
  }
  if (isTied) {
    return 'Deuce';
  }
  const highestScorePlayer = this.scorePlayer1 > this.scorePlayer2 ? this.namePlayer1 : this.namePlayer2;
  return ((this.scorePlayer1 - this.scorePlayer2) * (this.scorePlayer1 - this.scorePlayer2) === 1) ? 'Advantage ' + highestScorePlayer : 'Win for ' + highestScorePlayer;
};

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName === 'player1') {
    this.scorePlayer1 += 1;
  } else {
    this.scorePlayer2 += 1;
  }

};

module.exports = TennisGame3;
