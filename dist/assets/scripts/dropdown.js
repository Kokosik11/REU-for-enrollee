const cards = document.querySelectorAll(".how-to-enter .card-title");
const dropdown = document.querySelectorAll(".dropdown-content");
const arrow = document.querySelectorAll(".dropdown-arrow");

cards.forEach(card => {
    card.onclick = () => {
        if(card.dataset.opened == "true") {
            dropdown[card.dataset.id - 1].style.display = "none";
            dropdown[card.dataset.id - 1].style.opacity = "0";
            card.dataset.opened = "false";
            arrow[card.dataset.id - 1].style.transform = "rotateZ(0)";
            arrow[card.dataset.id - 1].style.transition = ".5s";
        } 
        else {
            dropdown[card.dataset.id - 1].style.display = "block";
            dropdown[card.dataset.id - 1].style.opacity = "1";
            card.dataset.opened = "true";
            arrow[card.dataset.id - 1].style.transform = "rotateZ(180deg)";
            arrow[card.dataset.id - 1].style.transition = ".5s";
        }
    }
})