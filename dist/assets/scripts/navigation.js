const line = document.querySelector(".short-line");

const buttons = document.querySelectorAll(".program")

const programName = document.querySelector(".program-name");
const programDirection = document.querySelector(".program-direction");
const enterExams = document.querySelector(".enter-exams");
const formOfStudy = document.querySelector(".form-of-study");
const directionNameTwo = document.querySelector(".direction-name-two");
const directionInfo = document.querySelector(".direction-info");

buttons.forEach(button => {
    button.onclick = () => {
        line.style.left = (+button.dataset.id == 1)?"5%":(+button.dataset.id == 2)?"35%":"60%"
        
        buttons.forEach(but => {
            but.classList.remove("active");
        })

        buttons[+button.dataset.id - 1].classList.add("active");

        programName.innerHTML = info[button.dataset.id - 1].programName;
        programDirection.innerHTML = info[button.dataset.id - 1].programDirection;
        enterExams.innerHTML = info[button.dataset.id - 1].enterExams;
        formOfStudy.innerHTML = info[button.dataset.id - 1].formOfStudy;
        directionNameTwo.innerHTML = info[button.dataset.id - 1].directionNameTwo;
        directionInfo.innerHTML = info[button.dataset.id - 1].directionInfo;
    }
})