const moreBtn = document.querySelector(".more-info");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const popupContent = document.querySelector(".popup-content");

function disableScroll() {
    document.body.classList.add("stop-scrolling");
    popupContent.classList.add("opened");
    popupContent.classList.remove("closed");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
    popupContent.classList.remove("opened");
    popupContent.classList.add("closed");
    setTimeout(() => {
        popup.style.display = "none";
    }, 750)
}

moreBtn.onclick = () => {
    degreeInfo.forEach(degree => {
        if(degree.degreeID === moreBtn.dataset.id) {
            popup.style.display = "block";
            let content = popup.querySelector(".popup-info");
            content.innerHTML = `<h2 class="popup-title">${degree.title}<h2>`;
            degree.content.forEach(cont => {
                let str = `<div>${cont}</div>`;
                content.innerHTML += str;
            })
        }

    })

    disableScroll();
}

popupClose.onclick = () => {
    if(popup.style.display == "block") { 
        enableScroll();
    }
};

document.addEventListener("keydown", e => {
    if(e.key == "Escape" && popup.style.display == "block") {
        enableScroll();
    } 
})

popup.addEventListener("mouseup", (e) => {
    if(e.target === popup) enableScroll();
})