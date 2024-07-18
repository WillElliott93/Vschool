const themeBtn = document.getElementById("theme-drop-down");
const headerTitle = document.getElementById("header");
let input = document.getElementsByName("message")[0];
let send = input.querySelector("button");
headerTitle.innerText = "Will Elliott";
headerTitle.style.color = "red"; 

function changeText() {
    const clearText = document.querySelectorAll("div.messages > div");
    for (let i = 0; i < clearText.length; i++) {
        clearText[i].innerText = ""
    }
}

send.addEventListener('click', function (event) {
    event.preventDefault();
    let value = document.getElementById("input").value
    sendText(value);
})

function sendText(value) {
    const newText = document.querySelectorAll("div.messages > div");
    for (let i = 0; i < newText.length; i++) { 
        newText[i].innerText = value
    }
}

function changeTheme() {
    
}

document.getElementById("clear-button").addEventListener('click', changeText)
