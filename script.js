let userscore = 0;
let compscore = 0;

let a = document.querySelector("#uScore");
let b = document.querySelector("#compScore");
let press = document.querySelectorAll(".choice");
let playBtn = document.getElementById("playBtn");

press.forEach((press) => {
    press.addEventListener("click", () => {
        const clickId = press.getAttribute("id");
        playGame(clickId);
    });
});

playBtn.addEventListener("click", () => {
    resetGame();
});

const playGame = (clickId) => {
    let compChoice = CompC();

    if (clickId === compChoice) {
        alert("Draw!");
    } else {
        let userWin = false;
        if (clickId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (clickId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const CompC = () => {
    const arr = ["rock", "paper", "scissors"];
    const a = Math.floor(Math.random() * 3);
    return arr[a];
};

function showWinner(userWin) {
    if (userWin) {
        userscore++;
        a.innerText = userscore;
        a.style.color = "green";
        setTimeout(() => {
            a.style.color = "";
        }, 500);
    } else {
        compscore++;
        b.innerText = compscore;
        b.style.color = "red";
        setTimeout(() => {
            b.style.color = "";
        }, 500);
    }
    alert(userWin ? "You Win!" : "Computer Win");
}

function resetGame() {
    userscore = 0;
    compscore = 0;
    a.innerText = userscore;
    b.innerText = compscore;
    alert("Game Reset!");
}