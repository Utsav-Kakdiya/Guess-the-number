//Generate the random Number.
let random = parseInt(1 + Math.random() * 99);
console.log(random);

let score = 0;
let reset = document.querySelector(".resetbtn");
let text = document.querySelector(".lable");
let userinput = document.querySelector(".datainput");
let scoredata = document.querySelector(".scoreboard")

let button = document.querySelector(".btn");
button.addEventListener("click", () => {

    //Take the number from user.
    let user = parseInt(userinput.value);

    //Game Conditions.
    if (user > random) {
        score++;
        text.innerText = (`Sorry, My number is less than ${user}`);
    }
    else if (user < random) {
        score++;
        text.innerText = (`Sorry, My number is greater than ${user}`);
    }
    else if (user === random) {
        score++;
        text.innerText = ("Congratulations!, You Guess the correct Number.");
        scoredata.innerText = (`Your Total attempt : ${score}`);

    }
    else {
        text.innerText = ("Please enter the valid number.");
    }

    // Clear input after each attempt
    userinput.value = '';

});

//Reset the game.
reset.addEventListener("click", () => {
    random = parseInt(1 + Math.random() * 99);
    console.log(random);
    text.innerText = ("Enter the number : ");
    userinput.value = '';
    scoredata.innerText = " ";
    score = 0;
});