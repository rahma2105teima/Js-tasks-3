
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');



function applyStyles() {
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#e8e8e8';
    document.body.style.margin = '20px';

    const headings = document.querySelectorAll('h1');
    headings.forEach((h1) => {
        h1.style.textAlign = 'center';
        h1.style.color = '#444';
        h1.style.marginBottom = '20px';
    });

    
    const todoApp = document.getElementById('todo-app');
    todoApp.style.textAlign = 'center';
    todoApp.style.marginBottom = '40px';

    taskInput.style.padding = '10px';
    taskInput.style.width = '60%';
    taskInput.style.fontSize = '16px';

    addTaskButton.style.padding = '10px 20px';
    addTaskButton.style.fontSize = '16px';
    addTaskButton.style.marginLeft = '10px';
    addTaskButton.style.cursor = 'pointer';
    addTaskButton.style.backgroundColor = '#007bff';
    addTaskButton.style.color = '#fff';
    addTaskButton.style.border = 'none';

    const taskUl = document.getElementById('taskList');
    taskUl.style.listStyleType = 'none';
    taskUl.style.padding = '0';

    
    const table = document.querySelector('table');
    table.style.width = '80%';
    table.style.margin = '0 auto';
    table.style.borderCollapse = 'collapse';

    const th = document.querySelectorAll('th');
    th.forEach((header) => {
        header.style.padding = '12px';
        header.style.border = '1px solid #ddd';
        header.style.backgroundColor = '#007bff';
        header.style.color = '#fff';
    });

    const td = document.querySelectorAll('td');
    td.forEach((cell) => {
        cell.style.padding = '12px';
        cell.style.border = '1px solid #ddd';
    });
}


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.style.display = 'flex';
    taskItem.style.justifyContent = 'space-between';
    taskItem.style.padding = '10px';
    taskItem.style.margin = '5px 20%';
    taskItem.style.borderRadius = '10px';
    taskItem.style.backgroundColor = '#f8f9fa';
    taskItem.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.style.flex = '1';
    taskContent.style.textAlign = 'left';
    taskContent.style.padding = '0 10px';

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.style.marginRight = '10px';
    doneButton.style.backgroundColor = '#28a745';
    doneButton.style.color = '#fff';
    doneButton.style.border = 'none';
    doneButton.style.padding = '5px 10px';
    doneButton.style.cursor = 'pointer';

    doneButton.addEventListener('click', () => {
        taskItem.style.backgroundColor = '#d4edda';
        taskContent.style.textDecoration = 'line-through';
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#dc3545';
    deleteButton.style.color = '#fff';
    deleteButton.style.border = 'none';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
});

applyStyles();

