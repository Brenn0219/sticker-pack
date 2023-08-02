let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let amountOfStickers = document.getElementById("amount");

subtract.addEventListener("click", subtractSticker);
add.addEventListener("click", addSicker);

function subtractSticker() {
    if (amountOfStickers.value == "" || amountOfStickers.value == "0") {
        amountOfStickers.classList.add("button-error");
        subtract.classList.add("button-desabled");
    } else {
        amountOfStickers.value = parseInt(amountOfStickers.value) - 1;
    }
}

function addSicker() {
    if (amountOfStickers.className == "button-error") {
        amountOfStickers.classList.remove("button-error");
    }

    if (amountOfStickers.value == "") {
        amountOfStickers.value = 1;
    } else {
        amountOfStickers.value = parseInt(amountOfStickers.value) + 1;
    }
}