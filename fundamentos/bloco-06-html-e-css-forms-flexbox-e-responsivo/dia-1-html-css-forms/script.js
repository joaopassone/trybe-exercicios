const form = document.getElementById('form');
const sendButton = document.getElementById('button-send');
const clearButton = document.getElementById('clear-button');
const checkAgree = document.getElementById('check-agree');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

sendButton.addEventListener('click', (event) => {
  if (checkAgree.checked === false) {
    event.preventDefault();
    return;
  }
  if (!inputName.checkValidity() || !inputEmail.checkValidity()) {
    alert('Dados inválidos!');
  } else {
    alert('Dados enviados com sucesso!');
  }
});

clearButton.addEventListener('click', () => {
  form.reset();
});
