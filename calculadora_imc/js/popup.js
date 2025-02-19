export const popup = {
    wrapper: document.querySelector(".popup-wrapper"),
    closeButton: document.querySelector("#close-popup"),
    imcResult: document.querySelector("#popup h1"),

    open() {
        popup.wrapper.classList.remove("hide")
    },
    close() {
        popup.wrapper.classList.add("hide")
    }
}

popup.closeButton.onclick = () => {
    popup.close()
}