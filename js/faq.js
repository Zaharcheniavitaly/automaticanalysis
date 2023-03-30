//--------------FAQ----------

const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
// console.log("answers:", answers)
const arrowButtom = document.querySelectorAll('.questions-arrow-buttom');
const arrowTop = document.querySelectorAll('.questions-arrow-top');
console.log("arrowTop:", arrowTop)

function textHiddenButtom(e) {
  answers.forEach((answ) => {
    console.log('Вверх');

    if (e.target.classList.contains('questions-arrow-buttom')) {

      e.target.classList.remove('questions-arrow-buttom');
      e.target.classList.add('questions-arrow-top');
    }

   

    answ.classList.remove('hidden');
  });
}

arrowButtom.forEach((item) => {
  item.addEventListener('click', textHiddenButtom);
  console.log('itemButtom', item);
});

function textHiddenTop(e){
    console.log('Вниз');
if (e.target.classList.contains('questions-arrow-top')) {
      e.target.classList.remove('questions-arrow-top');
      e.target.classList.add('questions-arrow-buttom');
    }
}


arrowTop.forEach((item) => {
  item.addEventListener('click', textHiddenTop);
});