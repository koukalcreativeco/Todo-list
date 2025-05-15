let todoList = [];



const renderList = () => {
    let todoListHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        const { name, dueDate } = todo;
        let html = `<div class="task">
        <p class="p1">${name}</P> <p class="p2">${dueDate}</p> 
        <button class="remove btn" onclick="
        todoList.splice(${i}, 1)
        renderList();
        ">Remove</button>
        </div>
        `;
        todoListHTML += html;
    }

    document.querySelector('.tasks').innerHTML = todoListHTML;
};

renderList();

const addTask = () => {
    let input = document.querySelector('.input');
    let text = input.value;
    let dateInput = document.querySelector('.input-date');
    let date = dateInput.value;
    if (text === '') {
        alert('Please enter a task');
        return;
    } else {
        todoList.push({name: text, dueDate: date});
        
    }
    input.value = '';
    renderList();
    

};

