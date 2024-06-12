function createTask() {
    const taskList = document.querySelector(".TaskList");

    // Create new task div
    const newTask = document.createElement("div");
    newTask.classList.add("Task");

    // Create input element
    const input = document.createElement("input");
    input.type = "checkbox";

    // Create label element
    const label = document.createElement("label");
    label.textContent = "taskText";

    // Create span element
    const span = document.createElement("span");
    span.classList.add("time");
    span.textContent = "taskTime";

    const binIcon = document.createElement("i");
    binIcon.classList.add("fas", "fa-trash-alt", "bin-icon");
    
    //Optionally add an event listener for deletion
    binIcon.addEventListener("click", function() {
        taskList.removeChild(newTask);
    });

    // Append input, label, and span to the new task div
    newTask.appendChild(input);
    newTask.appendChild(label);
    newTask.appendChild(span);
    newTask.appendChild(binIcon);

    // Append new task div to the TaskList div
    taskList.appendChild(newTask);
}

document.querySelector(".AddTask").onclick =createTask;