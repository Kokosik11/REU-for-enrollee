const moreBtn = document.querySelector(".more-info");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");

function disableScroll() {
    document.body.classList.add("stop-scrolling");
    let content = popup.querySelector(".popup-content");
    content.classList.add("opened");
    content.classList.remove("closed");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
    let content = popup.querySelector(".popup-content");
    content.classList.remove("opened");
    content.classList.add("closed");
    setTimeout(() => {
        popup.style.display = "none";
    }, 750)
}

moreBtn.onclick = () => {
    degreeInfo.forEach(degree => {
        if(degree.degreeID === moreBtn.dataset.id) {
            popup.style.display = "block";
            let content = popup.querySelector(".popup-info");
            content.innerHTML = `<h2>${degree.title}<h2>`;
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

