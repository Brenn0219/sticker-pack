let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let amountOfStickers = document.getElementById("amount");
let buttonSend = document.getElementById("send");

subtract.addEventListener("click", subtractSticker);
add.addEventListener("click", addSicker);
buttonSend.addEventListener("click", menssageSend);

// function to subtract when clicking on the button
function subtractSticker() {
    if (amountOfStickers.value == "" || amountOfStickers.value == "0") {
        amountOfStickers.classList.add("error");
        subtract.classList.add("button-desabled");
    } else {
        amountOfStickers.value = parseInt(amountOfStickers.value) - 1;
    }
}

// function to add when clicking the button
function addSicker() {
    if (subtract.classList.contains("button-desabled")) {
        subtract.classList.remove("button-desabled");
        amountOfStickers.classList.remove("error")
    }

    if (amountOfStickers.value == "") {
        amountOfStickers.value = 1;
    } else {
        amountOfStickers.value = parseInt(amountOfStickers.value) + 1;
    }
}

// function to show sent message
function menssageSend() {
    let menssage = document.getElementById("menssage-sent");
    menssage.innerHTML = "Formulário enviado com sucesso!";
    buttonSend.classList.add("button-desabled");
}