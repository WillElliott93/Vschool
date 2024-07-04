const button = document.getElementById('changeButton')

function changeTextContent(elementId, newText) {
    elementId = document.getElementById("heading")
    newText = 'Vschool Rocks!'
    elementId.textContent = newText
} 

button.addEventListener('click', function (e) {
    return changeTextContent(e)   
})