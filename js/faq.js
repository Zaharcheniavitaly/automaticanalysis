//--------------FAQ----------

const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
console.log('answers:', answers);
const arrowButtom = document.querySelectorAll('.arrow');
console.log('arrowButtom:', arrowButtom);
// const arrowTop = document.querySelectorAll('.questions-arrow-top');
// console.log('arrowTop:', arrowTop);

function textHiddenButtom(e) {
  answers.forEach((answ, index) => {
    const answerID = e.target.id;
    console.log('answers.forEach > answerID:', answerID);

    if (answerID == index) {
      if (e.target.classList.contains('questions-arrow-buttom')) {
        e.target.classList.toggle('questions-arrow-top');
        answers[answerID].classList.toggle('hidden');
      }
    } else {
      answ.classList.add('hidden');
    }
  });
}

arrowButtom.forEach((item) => {
  item.addEventListener('click', textHiddenButtom);
});
