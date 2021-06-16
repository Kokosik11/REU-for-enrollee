const askquestion = document.querySelector(".ask-question");
const popupQuestion = document.querySelector(".popup-question");
const popupCloseQ = document.querySelector(".popup-question_close");
const popupContentQ = document.querySelector(".popup-question_content");

function disableScrollQuestion() {
    document.body.classList.add("stop-scrolling");
    popupContentQ.classList.add("opened");
    popupContentQ.classList.remove("closed");
}

function enableScrollQuestion() {
    document.body.classList.remove("stop-scrolling");
    popupContentQ.classList.remove("opened");
    popupContentQ.classList.add("closed");
    setTimeout(() => {
      popupQuestion.style.display = "none";
    }, 700)
}

askquestion.onclick = () => {
    popupQuestion.style.display = "block";
    disableScrollQuestion();
}

popupCloseQ.onclick = () => {
  enableScrollQuestion();
}

document.addEventListener("keydown", e => {
    if(e.key == "Escape" && popupQuestion.style.display == "block") {
      enableScrollQuestion();
    } 
})

popupQuestion.addEventListener("mouseup", (e) => {
    if(e.target === popupQuestion) enableScrollQuestion();
})