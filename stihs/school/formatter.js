const body = document.getElementsByTagName("body")[0];
const prefix = `
<div class="-ixdial-cont">
    <p id="-ixdial-e"></p>
    <b class="-ixdial-title">Введите пароль:</b>
    <input id="-ixdial-text" type="text">
    <button id="-ixdial-apply" onclick="attemptLogin()">Подтвердить</button>
  </div>
<div class="-ixblur">
  <h1>
    Стиховик
  </h1>
  <p>
    Сборник всех моих (наших) стихов
  </p>
`;
const postfix = `
</div>`;

function apply(event) {
    body.innerHTML = prefix + body.innerHTML + postfix;
}

    console.log("ei");
    apply(event);