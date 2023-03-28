// -------------------------- Burger ----------------
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

function handlerBurger() {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/icon/close-nav.svg';
  } else {
    navBtnImg.src = './img/icon/burger-bl.png';
  }
}
navBtn.addEventListener('click', handlerBurger);

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
