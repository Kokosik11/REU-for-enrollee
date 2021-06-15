const line = document.querySelector(".short-line");
const degreesNav = document.querySelectorAll(".degrees");
const moreInfo = document.querySelector(".more-info");

const programLine = document.querySelector(".program-line");
const buttons = document.querySelectorAll(".program");

const programName = document.querySelector(".program-name");
const programDirection = document.querySelector(".program-direction");
const enterExams = document.querySelector(".enter-exams");
const formOfStudy = document.querySelector(".form-of-study");
const directionNameTwo = document.querySelector(".direction-name-two");
const directionInfo = document.querySelector(".direction-info");

let info = bachalorInfo;
let isBachalorInfo = true;

const changeFile = (isBachalor) => {
    info = isBachalor ? Array.from(bachalorInfo) : Array.from(masterInfo);
    isBachalorInfo = true;
    if(!isBachalor) {
        buttons[1].classList.add("program_active");
        isBachalorInfo = false;
    }
    changeData(1);
}

const changeData = (dataset) => {
    dataset--;
    if(isBachalorInfo) {
        programLine.prepend(buttons[0]);
        buttons[1].dataset.id = 2;
        buttons[2].dataset.id = 3;
        line.style.left = (dataset == 0)?"5%":(dataset == 1)?"35%":"60%";
        // buttons[dataset].classList.add("active");
    }
    else {
        buttons[0].remove();
        line.style.left = "0%";
        buttons[1].dataset.id = 1;
        buttons[2].dataset.id = 2;
        line.style.left = (dataset == 0)?"0%":(dataset == 1)?"25%":line.style.left;
        dataset++;
    }
    
    buttons.forEach(but => {
        but.classList.remove("program_active");
    })

    buttons[dataset].classList.add("program_active");
    

    if(!isBachalorInfo) dataset--;
    programName.innerHTML = info[dataset].programName;
    programDirection.innerHTML = info[dataset].programDirection;
    enterExams.innerHTML = info[dataset].enterExams;
    formOfStudy.innerHTML = info[dataset].formOfStudy;
    directionNameTwo.innerHTML = info[dataset].directionNameTwo;
    directionInfo.innerHTML = info[dataset].directionInfo;
}

buttons.forEach((button, index) => {
    button.onclick = () => {
        let dataset = +button.dataset.id;
        changeData(dataset);

        if(isBachalorInfo) moreInfo.dataset.id = index;
        else moreInfo.dataset.id = index + 2;
    }
})
