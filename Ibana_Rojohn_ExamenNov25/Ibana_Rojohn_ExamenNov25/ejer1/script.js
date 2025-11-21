const tasks = [];

const addTaskElement = document.getElementById("addTask");
const taskListElement = document.getElementById("taskList");
const taskInputElement = document.getElementById("taskInput");

function createTaskElement(task) {
    const taskElement = document.createElement("li");

    const taskTextElement = document.createElement("p");
    taskTextElement.textContent = task.content;
    taskElement.appendChild(taskTextElement);

    const taskRemoveElement = document.createElement("button");
    taskRemoveElement.textContent = "X";
    taskRemoveElement.classList.add("delete-btn");
    taskRemoveElement.dataset.id = task.id;
    taskElement.appendChild(taskRemoveElement);

    return taskElement;
}

function isTaskRepeated(task) {
    const foundTasks = tasks.find((t) => { return t.content.toLowerCase() === task.content.toLowerCase();});

    return foundTasks !== undefined;
}

let taskId = 1;
function addTaskToList(task) {
    if (task.content === "") {
        alert("No se puede añadir una tarea vacía");
        return;
    } else if (isTaskRepeated(task)) {
        alert("Tarea duplicada");
        return;
    }

    tasks.push(task);
    taskListElement.appendChild(createTaskElement(task));
}

function removeTaskFromList(id) {
    const index = tasks.findIndex((t) => { return t.id ==id; });

    if (index !== -1) {
        tasks.splice(index, 1);
        const removeButtonElement = document.body.querySelectorAll(`#taskList > li > button[data-id="${id}"]`)[0];
        const liElement = removeButtonElement.parentNode;
        liElement.parentNode.removeChild(liElement);
    }
}

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.closest("#taskList")) {
            removeTaskFromList(e.target.dataset.id);
        }
        else if (e.target.closest("body")) {
            const task = {
                id: taskId++,
                content: taskInputElement.value.trim(),
            };
            taskInputElement.value = "";

            addTaskToList(task);
        }
    }
})