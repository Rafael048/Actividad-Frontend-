
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

function openButtonNintendo() {
    const nav = document.querySelector('#nav')
    const back = document.querySelector('#back')
    nav.classList.add("visible")
    back.classList.add("invisible")

}

function closeButtonNintendo() {
    const nav = document.querySelector('#nav')
    const back = document.querySelector('#back')
    nav.classList.remove('visible')
    back.classList.remove("invisible");

}

