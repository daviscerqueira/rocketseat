export function highlightButton(id) {
    const currentSelect = document.querySelector("header .selected")
    if (currentSelect) {currentSelect.classList.remove("selected")}
    const button = document.getElementById(id)
    button.classList.add("selected")
}