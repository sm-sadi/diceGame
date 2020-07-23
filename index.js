var turn = 1;

function reset() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var x = './images/dice' + randomNumber1 + '.png';
    var y = './images/dice' + randomNumber2 + '.png';

    document.querySelector(".img1").setAttribute("src", x);
    document.querySelector(".img2").setAttribute("src", y);

    if (turn == 1) {
        document.querySelector(".blu-btn").innerHTML = "Player 1 turn";
        turn = 2;
    }
    else if (turn == 2) {
        document.querySelector(".blu-btn").innerHTML = "Player 2 turn";
        turn = 1;
    }

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".who").innerHTML = "🥇 Player 1 won";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector(".who").innerHTML = "🥇 Player 2 won";
    }
    else {
        document.querySelector(".who").innerHTML = "🏆 Match draw";
    }
}
