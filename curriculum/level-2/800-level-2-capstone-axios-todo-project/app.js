const apiUrl = 'https://api.vschool.io/WillElliott/todo';

const toDoForm = document.getElementById('toDoForm');
const toDoList = document.getElementById('toDoList');

function fetchTodos() {
    axios.get(apiUrl)
        .then(response => {
            const todos = response.data;
            todos.forEach(todo => createCard(todo));
        })
        .catch(error => console.error('Error fetching todos:', error));
}

document.addEventListener('DOMContentLoaded', fetchTodos);

function createCard(todo) {
    const card = document.createElement('div');
    card.className = 'todo-card';
    card.id = todo._id;

    const title = document.createElement('h2');
    title.textContent = `Title: ${todo.title}`;
    const price = document.createElement('p');
    price.textContent = `Price: $${todo.price}`;
    const description = document.createElement('p');
    description.textContent = `Description: ${todo.description}`;
    const img = document.createElement('img');
    img.src = todo.imgUrl;
    img.alt = todo.title;

    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.textContent = 'Completed'
    completedCheckbox.checked = todo.completed || false;
    completedCheckbox.addEventListener('change', () => {
        todo.completed = completedCheckbox.checked;
        updateTodoInAPI(todo._id, todo);
        updateCardStyle(card, todo.completed);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.type = 'button'; 
    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        showEditForm(card, todo);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTodoFromAPI(todo._id, card);
    });

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.append(title, price, description, img, completedCheckbox, editButton, deleteButton);

    const editForm = document.createElement('form');
    editForm.className = 'edit-form';
    editForm.style.display = 'none';

    const newTitle = document.createElement('input');
    newTitle.value = todo.title;
    newTitle.placeholder = 'Edit title';
    const newPrice = document.createElement('input');
    newPrice.value = todo.price;
    newPrice.placeholder = 'Edit price';
    const newDescription = document.createElement('input');
    newDescription.value = todo.description;
    newDescription.placeholder = 'Edit description';
    const newImg = document.createElement('input');
    newImg.value = todo.imgUrl;
    newImg.placeholder = 'Edit image URL';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Changes';
    saveButton.type = 'button';
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        todo.title = newTitle.value;
        todo.price = newPrice.value;
        todo.description = newDescription.value;
        todo.imgUrl = newImg.value;
        updateTodoInAPI(todo._id, todo);
        updateCardContent(cardContent, todo);
        editForm.style.display = 'none';
        cardContent.style.display = 'block';
    });

    editForm.append(newTitle, newPrice, newDescription, newImg, saveButton);

    card.append(cardContent, editForm);

    toDoList.appendChild(card);
}

toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('toDoTitle').value;
    const price = document.getElementById('toDoPrice').value;
    const description = document.getElementById('toDoDescription').value;
    const imgUrl = document.getElementById('toDoImg').value;

    const newTodo = {
        title,
        price,
        description,
        imgUrl
    };

    axios.post(apiUrl, newTodo)
        .then(response => {
            createCard(response.data);
            toDoForm.reset();
        })
        .catch(error => console.error('Error posting todo:', error));
});

function updateTodoInAPI(id, updatedTodo) {
    axios.put(`${apiUrl}/${id}`, updatedTodo)
        .then(response => console.log('Todo updated:', response.data))
        .catch(error => console.error('Error updating todo:', error));
}

function updateCardContent(cardContent, todo) {
    const title = cardContent.querySelector('h2');
    const price = cardContent.querySelector('p');
    const description = cardContent.querySelectorAll('p')[1];
    const img = cardContent.querySelector('img');

    title.textContent = `Title: ${todo.title}`;
    price.textContent = `Price: $${todo.price}`;
    description.textContent = `Description: ${todo.description}`;
    img.src = todo.imgUrl;
}

function updateCardStyle(card, completed) {
    card.style.textDecoration = completed ? 'line-through' : 'none';
}

function showEditForm(card) {
    const cardContent = card.querySelector('.card-content');
    const editForm = card.querySelector('.edit-form');

    cardContent.style.display = 'none';
    editForm.style.display = 'block';
}

function deleteTodoFromAPI(id, card) {
    axios.delete(`${apiUrl}/${id}`)
        .then(() => {
            card.remove();
        })
        .catch(error => console.error('Error deleting todo:', error));
}