const cards = document.querySelectorAll(".how-to-enter .card-title");
const dropdown = document.querySelectorAll(".dropdown-content");
const arrow = document.querySelectorAll(".dropdown-arrow");

cards.forEach(card => {
    card.onclick = () => {
        if(card.dataset.opened == "true") {
            dropdown[card.dataset.id - 1].style.display = "none";
            card.dataset.opened = "false";
            arrow[card.dataset.id - 1].style.transform = "rotateZ(0)";
        } 
        else {
            dropdown[card.dataset.id - 1].style.display = "block";
            card.dataset.opened = "true";
            arrow[card.dataset.id - 1].style.transform = "rotateZ(180deg)";
        }
    }
})