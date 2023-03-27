// Burger
const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

function handlerBurger() {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icon/close-nav.svg";
  } else {
    navBtnImg.src = "./img/icon/burger-bl.png";
  }
}

navBtn.addEventListener("click", handlerBurger);


const textEl = document.querySelectorAll('.text')
console.log("textEl:", textEl)
const buttonText = document.querySelector('.button-text')
console.log("buttonText:", buttonText)

function clickHandler (){
  console.log("click");
  textEl.forEach((item)=>{
  item.classList.remove("hidden")
})
}

buttonText.addEventListener('click', clickHandler)


