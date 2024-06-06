import Auth from "../services/auth.js";
import Todo from "../services/todo.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const deleteTodo = async (id) => {
    await Todo.delete(id);
    location.todos();
}

const completeCheck = async(checkBox, id, description) => {
    const completed = checkBox.checked;
    checkBox.checked = !completed;
    await Todo.update({id,description,completed});
    checkBox.checked = completed;
}

const refreshElements = async () => {
    const elements = await Todo.getAll();
    const data = elements.data;
    const todoContainer = document.getElementById('todos');
    todoContainer.innerHTML = '';

    data.forEach(element => {
        const {id, description, completed} = element;

        const item = document.createElement('div');
        item.className = 'todos__item';
    
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = description;
        descriptionParagraph.className = 'todos__item__description';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'todos__item__deleteBtn';
        deleteButton.onclick = () => deleteTodo(id);

        const checkBoxLabel = document.createElement('label');
        const checkBoxSpan = document.createElement('span');
        checkBoxSpan.text = 'todos-completed__span'
        checkBoxSpan.textContent = 'Is completed'

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox'
        checkBox.checked = completed;
        checkBox.class = 'todos-completed__checkbox'
        checkBox.onclick = async() => completeCheck(
            checkBox, id, description
        );

        checkBoxLabel.appendChild(checkBox);
        checkBoxLabel.appendChild(checkBoxSpan);

        item.appendChild(descriptionParagraph);
        item.appendChild(deleteButton);
        item.appendChild(checkBoxLabel);
        todoContainer.appendChild(item);
    });
}

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    refreshElements();

    const button = document.getElementById('todo-create');

    button.onclick = () => {
        location.todo()};
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}