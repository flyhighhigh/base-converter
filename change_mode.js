body.style.transition = '0.6s'
card.style.transition = '0.4s'
title.style.transition = '0.4s'
for (let f of forms) {
    f.style.transition = '0.2s'
}
for (let l of labels) {
    l.style.transition = '0.1s'
}

toggle.addEventListener('click', (e) => {
    if (body.className == 'dark_mode') { // change to lightmode
        toggle.innerHTML = 'dark_mode'
        body.className = 'light_mode'
        localStorage['theme'] = 'light_mode'
    } else {
        toggle.innerHTML = 'light_mode' // change to darkmode
        body.className = 'dark_mode'
        localStorage['theme'] = 'dark_mode'
    }
})