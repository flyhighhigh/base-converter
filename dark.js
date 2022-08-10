const mode_toggle = document.getElementById('mode_toggle')
const body = document.querySelector('body')
const card = document.querySelector('.mycard')
const title = document.querySelector('h1')
const forms = document.querySelectorAll('.form-control')
const labels = document.querySelectorAll('.mylabel')


body.style.transition = '0.6s'
card.style.transition = '0.4s'
title.style.transition = '0.4s'
for (let f of forms) {
    f.style.transition = '0.2s'
}
for (let l of labels) {
    l.style.transition = '0.1s'
}

mode_toggle.addEventListener('click', (e) => {
    if (mode_toggle.innerHTML == 'light_mode') { // change to lightmode
        mode_toggle.innerHTML = 'dark_mode'
        body.classList.remove('darkmode')
        body.classList.add('lightmode')
    } else {
        mode_toggle.innerHTML = 'light_mode' // change to darkmode
        body.classList.remove('lightmode')
        body.classList.add('darkmode')
    }
})