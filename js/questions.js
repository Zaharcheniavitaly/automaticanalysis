//--------------FAQ----------
const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
const arrowButtom = document.querySelectorAll('.questions-arrow-buttom');
const questionBorder = document.querySelectorAll('.question-border');

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
      //   answ.classList.add('hidden');
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
