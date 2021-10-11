var announce = document.getElementById("announce");

function winner() {
    let teamOne = document.getElementById("teamOne").value
    let teamTwo = document.getElementById("teamTwo").value
    var teamOneWins = Number(document.getElementById("teamOneWins").value * 3)
    var teamOneDraw = Number(document.getElementById("teamOneDraw").value)
    var teamOneLoss = Number(document.getElementById("teamOneLoss").value)
    var teamTwoWins = Number(document.getElementById("teamTwoWins").value * 3)
    var teamTwoDraw = Number(document.getElementById("teamTwoDraws").value)
    var teamTwoLoss = Number(document.getElementById("teamTwoLoss").value )
    var teamOneTotal = teamOneWins + teamOneLoss + teamOneDraw
    var teamTwoTotal = teamTwoWins + teamTwoLoss + teamTwoDraw
    if (teamOneTotal > teamTwoTotal) {
        announce.innerHTML = `The Winner is ${teamOne} with the Total of ${teamOneTotal}`
    }
    else if (teamOneTotal == teamTwoTotal) {
        announce.innerHTML = `It's a TIE!`
    }
    else {
        announce.innerHTML = `The Winner is ${teamTwo} with the Total of ${teamTwoTotal}`
    }
}