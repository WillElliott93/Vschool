let buttonChange = document.getElementById("colorChange")


buttonChange.addEventListener('dblclick', () => {
    buttonChange.style.backgroundColor = "green"
})

buttonChange.addEventListener('mouseover', () => {
    buttonChange.style.backgroundColor = "blue"
})

buttonChange.addEventListener('mouseup', () => {
    buttonChange.style.backgroundColor = "yellow"
})

buttonChange.addEventListener('mousedown', () => {
    buttonChange.style.backgroundColor = "red"
})

window.addEventListener('wheel', () => {
    buttonChange.style.backgroundColor = "orange"
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        buttonChange.style.backgroundColor = "red"
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'g' || event.key === 'G') {
        buttonChange.style.backgroundColor = "green"
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'y' || event.key === 'Y') {
        buttonChange.style.backgroundColor = "yellow"
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'b' || event.key === 'B') {
        buttonChange.style.backgroundColor = "blue"
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key === 'o' || event.key === 'O') {
        buttonChange.style.backgroundColor = "orange"
    }
})