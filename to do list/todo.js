let tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
const titleText = document.querySelector('#title');
const inputText = document.querySelector('#toDoText')
const timeInput = document.querySelector('#time')
const submitBtn = document.querySelector('#submitBtn');
const clearBtn = document.querySelector('#clearBtn');
const parentElement = document.querySelector('.taskParent');

const createToDoItem = (title, text, time) => {
    return {
        id: crypto.randomUUID(),
        title: title,
        text: text,
        time: time,
        completed: false,
    }
}

window.addEventListener('DOMContentLoaded', () => {
    tasks.forEach(task => {
        displayUpdate(task);
    });
});

const displayUpdate = (task) => {
    let newTaskDisplay = document.createElement('div');
    newTaskDisplay.classList.add('task');

    const title = document.createElement('h2');
    title.textContent = `${task.title}`;
    title.classList.add('htwo')

    const br = document.createElement('br');

    const details = document.createElement('p');
    details.textContent = `Description: ${task.text}`;

    const time = document.createElement('em');
    time.textContent = `Do it by: ${task.time}`;

    const hr = document.createElement('hr')

    const label = document.createElement('label');
    label.textContent = "Done >>> ";
    label.htmlFor = "done";



    const done = document.createElement('input');
    done.type = "checkbox";
    done.id = "done"

    done.addEventListener('change', () => {
        task.completed = done.checked;
        newTaskDisplay.remove();
        tasks = tasks.filter(task => !task.completed);
        setLocalStorage();
    });

    label.append(done);

    newTaskDisplay.append(title, br, details, time, hr, label);
    parentElement.appendChild(newTaskDisplay);
}

const setLocalStorage = () => {
    localStorage.setItem('toDoList', JSON.stringify(tasks));
}

const newToDo = (title, text, time) => {
    if (title.trim() === "" || text.trim() === "" || time.trim() === "") {
        return false; 
    }
    const newTask = createToDoItem(title, text, time);
    tasks.push(newTask);
    setLocalStorage();
    return true;
}

submitBtn.addEventListener('click', () => {
    if (titleText.value.trim() === "" || inputText.value.trim() === "" || timeInput.value.trim() === "") {
        return 
    }
    newToDo(titleText.value, inputText.value, timeInput.value);
    titleText.value = "";
    timeInput.value = "";
    inputText.value = "";
    displayUpdate(tasks[tasks.length - 1]);
    console.log(tasks);
});