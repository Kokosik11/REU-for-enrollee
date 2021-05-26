const line = document.querySelector(".short-line");
const degreesNav = document.querySelectorAll(".degrees");

const buttons = document.querySelectorAll(".program");

const programName = document.querySelector(".program-name");
const programDirection = document.querySelector(".program-direction");
const enterExams = document.querySelector(".enter-exams");
const formOfStudy = document.querySelector(".form-of-study");
const directionNameTwo = document.querySelector(".direction-name-two");
const directionInfo = document.querySelector(".direction-info");

if(degreesNav[0].classList.contains("active")) {
    buttons.forEach(button => {
        button.onclick = () => {
            line.style.left = (+button.dataset.id == 1)?"5%":(+button.dataset.id == 2)?"35%":"60%"
            
            buttons.forEach(but => {
                but.classList.remove("active");
            })
    
            buttons[+button.dataset.id - 1].classList.add("active");
    
            programName.innerHTML = bachalorInfo[button.dataset.id - 1].programName;
            programDirection.innerHTML = bachalorInfo[button.dataset.id - 1].programDirection;
            enterExams.innerHTML = bachalorInfo[button.dataset.id - 1].enterExams;
            formOfStudy.innerHTML = bachalorInfo[button.dataset.id - 1].formOfStudy;
            directionNameTwo.innerHTML = bachalorInfo[button.dataset.id - 1].directionNameTwo;
            directionInfo.innerHTML = bachalorInfo[button.dataset.id - 1].directionInfo;
        }
    })
}
