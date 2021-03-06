const degrees = document.querySelectorAll(".degrees");
const degreeName = document.querySelector(".degree-name");
let isBachalor = true;

degrees.forEach(degree => {
    degree.onclick = () => {
        degrees.forEach(d => {
            d.classList.remove("active");
        })
        degrees[degree.dataset.id - 1].classList.add("active");
        if(degree.dataset.id == "1") {
            isBachalor = true;
            degreeName.innerHTML = "Бакалавриат";
            moreInfo.dataset.id = 0;
        }
        else {
            isBachalor = false;
            degreeName.innerHTML = "Магистратура";
            moreInfo.dataset.id = 3;
        } 
        changeFile(isBachalor);
    }
})
