
function openButtonLanding() {
    const nav = document.querySelector('#nav')
    const img = document.querySelector('#img-welcome')
    img.classList.add("invisible")
    nav.classList.add("visible")
}

function closeButtonLanding() {
    const img = document.querySelector('#img-welcome')
    const nav = document.querySelector('#nav')
    nav.classList.remove("visible");
    img.classList.remove("invisible")

}

function openButton() {
    const nav = document.querySelector('#nav')
    nav.classList.add("visible")
}

function closeButton() {
    const nav = document.querySelector('#nav')
    nav.classList.remove("visible");

}

