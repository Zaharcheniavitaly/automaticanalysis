// Burger
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

const textEl = document.querySelectorAll('.text')
const buttonText = document.querySelector('.button-text')

function handlerBurger() {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icon/close-nav.svg";
  } else {
    navBtnImg.src = "./img/icon/burger-bl.png";
  }
}

navBtn.addEventListener("click", handlerBurger);




function clickHandler (){
  textEl.forEach((item)=>{
  item.classList.remove("hidden")
  buttonText.classList.add("hidden")
})
}

buttonText.addEventListener('click', clickHandler)


