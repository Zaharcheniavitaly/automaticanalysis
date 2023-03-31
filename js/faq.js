//--------------FAQ----------

const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
// console.log('answers:', answers);
const arrowButtom = document.querySelectorAll('.arrow');
// console.log('arrowButtom:', arrowButtom);
// const arrowTop = document.querySelectorAll('.questions-arrow-top');
// console.log('arrowTop:', arrowTop);

function textHiddenButtom(e) {
  answers.forEach((answ, index) => {
    const answerID = e.target.id;
    // console.log('answers.forEach > answerID:', answerID);

    if (answerID == index) {
      if (e.target.classList.contains('questions-arrow-buttom')) {
        e.target.classList.toggle('questions-arrow-top');
        answers[answerID].classList.toggle('hidden');
      }
    } else {
      answ.classList.add('hidden');

      arrowButtom.forEach((item) => {
        if (answerID != index) {
            console.log('answerID', answerID);
            console.log('index', index);
          if (item.classList.contains('questions-arrow-top')) {
            item.classList.remove('questions-arrow-top');

            console.log('classList', item.classList);
          }
        }
      });
    }
  });
}

arrowButtom.forEach((item) => {
  item.addEventListener('click', textHiddenButtom);
});

// if(answerID !== index) {
//     arrowButtom.forEach((item) => {
//       if (item.classList.contains('questions-arrow-top')) {
//         item.classList.remove('questions-arrow-top');
//         console.log('arrowButtom.classList', item.classList);
//       }
//     });
//   }
