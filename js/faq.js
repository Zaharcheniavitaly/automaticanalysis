//--------------FAQ----------

const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
const arrowButtom = document.querySelectorAll('.questions-arrow-buttom');
const questionsAnswers = document.querySelectorAll('.questions-answers');

function textHiddenButtom(e) {
  answers.forEach((answ, index) => {
    const answerID = e.target.id;

    if (answerID == index) {
      arrowButtom.forEach((item) => {
        item.classList = 'questions-arrow-buttom';
      });

      if (e.target.classList.contains('questions-arrow-buttom')) {
        e.target.classList.add('questions-arrow-top');
        answers[answerID].classList.remove('hidden');
      }
    } else {
      answ.classList.add('hidden');
    }
  });
}

arrowButtom.forEach((item) => {
  item.addEventListener('click', textHiddenButtom);
});

/*

function textHidden(e){
    answers.forEach((item)=>{
        item.classList.add('hidden')
    })
}

questionsAnswers.forEach((item)=>{
    item.addEventListener('click', textHidden)
})
*/
