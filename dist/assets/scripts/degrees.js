const degrees = document.querySelectorAll(".degrees");

degrees.forEach(degree => {
    // if(degree.classList.item)
    degree.onclick = () => {
        degrees.forEach(d => {
            d.classList.remove("active");
        })
        degrees[degree.dataset.id - 1].classList.add("active");
    }
})