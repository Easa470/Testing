function addTask() {
    const taskInput = document.querySelector('.search-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = function () {
        taskItem.remove();
    };

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);


    const taskList = document.getElementById('taskList');

    console.log('Adding task:', taskText);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}


document.querySelector('.search-button').onclick = addTask;


document.querySelector('.search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});
