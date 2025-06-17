
const input = document.getElementById("-ixdial-text");
const blur = document.getElementsByClassName("-ixblur")[0];
const dialogue = document.getElementsByClassName("-ixdial-cont")[0];
const error = document.getElementById("-ixdial-e");
const pre = document.getElementsByTagName("pre")[0];

let mem_data = pre.innerText;

const passwords = [
    "ar_56928@c",
    "al_72840@b",
    "ib_28636@b",
    "an_04200@z",
    "guest_73@a",
    "@0"
]

window.onload = (event) => {
    pre.textContent = "";
    //pre.textContent = mem_data.replace(/[^\s\n]/g, '*');
}

function attemptLogin() {
    var content = input.value;
    if (passwords.includes(content)) {
        blur.style.filter = "none";
        dialogue.style.display = "none";
        pre.textContent = mem_data;
    } else if (content.trim() == "") {
        error.textContent = "Ничего не забыл?";
    } else {
        error.textContent = "Неверный пароль";
    }
}