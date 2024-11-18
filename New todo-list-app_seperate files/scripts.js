const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a new task
addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.ariaValueMax.trim();

        if (taskText !== "") {
            // Create new List item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Add "Mark as Completed" button
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.classList.add('complete-btn');
            li.appendChild(completeBtn);

            // Add "Delete" button
            const DeleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn); 

            // Append new task to the List
            taskList.appendChild(li)

            // Clear input field
            taskInput.value = "";

            // Complete task when clicked
            completeBtn.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Delete task when clicked
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(li);
            });
        }
    });