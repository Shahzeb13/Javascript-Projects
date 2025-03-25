import { toDoList } from "../../data/todo.js";
import { generateId } from "../utils/generateId.js";
import { addtoStorage } from "../utils/addtoStorage.js";


const storedTasks = JSON.parse(localStorage.getItem('todo'));
if (storedTasks) {
    toDoList.length = 0; // Clear the current array
    toDoList.push(...storedTasks); // Load tasks from storage
}



function rendertoDoHTML() {
let html = '';
toDoList.forEach((task)  => {
    

    html += `
    <li class='task  js-task js-taskId-${task.id} ' data-task-id = ${task.id} >${task.title}</li>
    
    `
} );

let view = document.querySelector('.js-tasks');
view.innerHTML = html;


}



rendertoDoHTML();



function addTodo()  {
    let title = document.querySelector('.js-input').value.trim();
    if (!title) return; // Prevent adding empty tasks

    const id = generateId();
    
    let task = {
        id,
        title
    };

    toDoList.push(task);
    rendertoDoHTML();
    console.log(toDoList);
    addtoStorage('todo', toDoList); // Make sure storage key is correct
    
    document.querySelector('.js-input').value = '';
}


document.querySelector('.js-add-btn').addEventListener('click', () => {
     // Clear input field
     addTodo();
});


// delete function



document.querySelector('.js-tasks').addEventListener('click'  , (event) => {
    let task = event.target;
    if(task.classList.contains('js-task')){
        document.querySelectorAll('.task').forEach((task) => {
              task.classList.remove('checked')
              });
        task.classList.add('checked');

    }
})

document.querySelector('.js-delete-btn').addEventListener('click', () => {
    // Find the selected task
    let selectedTask = document.querySelector('.task.checked');

    if (!selectedTask) {
        alert("Please select a task to delete.");
        return;
    }

    let taskId = selectedTask.dataset.taskId;

    // Filter out the task from toDoList
    const updatedTasks = toDoList.filter(task => task.id !== taskId);
    toDoList.length = 0;
    toDoList.push(...updatedTasks);

    // Update Local Storage
    addtoStorage('todo', toDoList);

    // Re-render the list
    rendertoDoHTML();
});


//Edit Functionality


document.querySelector('.edit-btn').addEventListener('click' , () => {
    let selectedTask = document.querySelector('.task.checked');
    // console.log(selectedTask);
    let taskId = selectedTask.dataset.taskId;
    if (!selectedTask) {
        alert("Please select a task to Edit.");
        return;
    }

    let parentNode = document.querySelector('.js-tasks');
    let targetElem = document.querySelector(`.js-taskId-${taskId}`);

    let InputElem = document.createElement('input');

    InputElem.classList.add('edit-input');
    InputElem.placeholder = 'Edit Here Pal!'

    parentNode.replaceChild(InputElem , targetElem);

    InputElem.addEventListener('keydown' , (event) =>{
        if(event.key === 'Enter'){
            let InputText  = InputElem.value;
            let matchingTask;
            toDoList.forEach( (t) => {
                if(t.id === taskId){
                    matchingTask = t;
                    matchingTask.title = InputText;
                    rendertoDoHTML();
                    addtoStorage('todo', toDoList);
                }
            }) 
        }
    })
});