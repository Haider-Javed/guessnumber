let random = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guess");
const result = document.getElementById("result");
const guessBtn = document.querySelector(".guess");

guessBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        result.innerHTML = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    if (userGuess === random) {

        result.innerHTML = "You guessed the number!";
        result.style.color = "green";
        random = Math.floor(Math.random() * 100) + 1;

    } else if (userGuess > random) {
        result.innerHTML = "Too high!";
        result.style.color = "red";

    } else {
        result.innerHTML = "Too low!";
        result.style.color = "red";

    }
    setTimeout(() => {
        result.innerHTML = "";
    }, 700);
});

