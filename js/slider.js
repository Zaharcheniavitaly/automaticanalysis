const slider = document.querySelector("#slider");
const img = document.querySelector("#slider img");
const sliderItems = Array.from(slider.children);
const btnСircle = document.querySelectorAll(".сircleItem");

// const btnNext = document.querySelector("#btnNext");
// const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach((slide, index) => {
  if (index !== 0) slide.classList.add("hidden");

  slide.dataset.index = index;

  sliderItems[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    showNextSlide("next");
    thisSlide(index);
  });
});

function thisSlide(index) {
  btnСircle.forEach((item) => {
    item.classList.remove("colorItem--active");
  });
  btnСircle[index].classList.add("colorItem--active");
}

btnСircle.forEach((item) => {
  item.addEventListener("click", function (e) {
    const fileName = e.target.dataset.file;

    const newScr = `./img/slider/${fileName}`;
    img.src = newScr;

    document
      .querySelector(".colorItem--active")
      .classList.remove("colorItem--active");

    e.target.classList.add("colorItem--active");
  });
});



function showNextSlide(direction) {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;

  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");

  thisSlide(currentSlideIndex)
}

setInterval(() => {
  showNextSlide("next");
}, 4000);
