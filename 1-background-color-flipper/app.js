const fixedColor = ["red", "blue", "yellow", "green", "white", "purple", "black"];

// fixed button logic
const fixedBtn = document.getElementById("fixed-btn");
fixedBtn.addEventListener("click", function () {
    const index = getRandomNumber();
    document.body.style.backgroundColor = fixedColor[index];
});

function getRandomNumber() {
    return Math.floor(Math.random() * fixedColor.length);
}