// ---------------- Появляющийся текст на главной стр. -----------------

const textEl = document.querySelectorAll('.text');
const buttonText = document.querySelector('.button-text');

function clickHandler() {
  textEl.forEach((item) => {
    item.classList.remove('hidden');
    buttonText.classList.add('hidden');
  });
}

buttonText.addEventListener('click', clickHandler);
