const form = document.getElementById("add-todo")
const list = document.getElementById("list");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const item = form.title.value;
    form.title.value = ""; 

    const li = document.createElement("li");  

    const div = document.createElement("div");
    div.textContent = item;

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.style.display = "none"; 

    const editButton = document.createElement("button");
    editButton.textContent = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.style.display = "none";

    li.appendChild(div);
    li.appendChild(newInput);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(saveButton);

    list.append(li);

    deleteButton.addEventListener('click', function() {
        li.remove();
    })

    editButton.addEventListener('click', function () {
        toggleEditView();
    })

    saveButton.addEventListener('click', function() {
        const newItem = newInput.value;
        div.textContent = newItem;
        toggleEditView();
    })

    function toggleEditView() {
        if (newInput.style.display === "none") {
            div.style.display = "none";
            newInput.style.display = "block";
            newInput.value = div.textContent;
            editButton.style.display = "none";
            saveButton.style.display = "inline-block";

            li.insertBefore(newInput, editButton);
            li.insertBefore(saveButton, deleteButton);
        } else {
            div.style.display = "block";
            newInput.style.display = "none";
            editButton.style.display = "inline-block";
            saveButton.style.display = "none";
        }
    }
})