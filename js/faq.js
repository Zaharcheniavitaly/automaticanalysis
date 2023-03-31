//--------------FAQ----------

const questionsBtns = document.querySelectorAll('.question-border');
const answers = document.querySelectorAll(' .question-answer');
// console.log('answers:', answers);
const arrowButtom = document.querySelectorAll('.questions-arrow-buttom');
console.log('arrowButtom:', arrowButtom);
// const arrowTop = document.querySelectorAll('.questions-arrow-top');
// console.log('arrowTop:', arrowTop);

function textHiddenButtom(e) {
  answers.forEach((answ, index) => {
    const answerID = e.target.id;
    // console.log('answers.forEach > answerID:', answerID);

    // if (answerID !== index) {
    //   arrowButtom.forEach((item) => {
    //     if (item.classList.contains('questions-arrow-top')) {
    //       item.classList.remove('questions-arrow-top');
    //     }
    //   });
    // }

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

    // arrowButtom.forEach((item) => {
    //   if (answerID != index && item.classList.contains('questions-arrow-top')) {
    //     let list = item.classList;
    //     console.log('arrowButtom.forEach > list:', list);
    //     console.log('classList  2>>>', item.classList);

    //     item.classList.remove('questions-arrow-top');
    //   }
    // });
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
