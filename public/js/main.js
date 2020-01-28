let list;
let todo;
let lastId;
let newElemInput;

window.onload = function() {
    lastId = 0;
    todo = new Map();
    list = document.getElementById('list');
    newElemInput = document.getElementById('new-elem');

    //Add element to list
    document.getElementById('add-btn').addEventListener('click', function() {
        if (newElemInput.value) {
            createListElem(newElemInput.value);
            newElemInput.value = '';
        }
    });

    //Remove element from list
    document.getElementById('list').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            todo.delete(parseInt(event.target.parentElement.getAttribute('id')));
            event.target.parentElement.remove();
        }
    });

    //Mark element as done/undone
    document.getElementById('list').addEventListener('click', function(event) {
        if (event.target.classList.contains('check')) {
            event.target.parentElement.classList.toggle('active');
        }
    });
};

function createListElem(title) {
    addElemToList(title);
    let newLi = document.createElement('li');
    newLi.setAttribute('id', lastId);
    newLi.classList.add('active');
    addOptions(title, newLi);
    list.appendChild(newLi);
}

function addOptions(title, li) {
    addCheckbox(li);
    addSpan(title, li);
    addDeleteBtn(li);
}

function addElemToList(title) {
    lastId++;
    todo.set(lastId, title);
}

function addDeleteBtn(li) {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
}

function addCheckbox(li) {
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.id = li.id + '-check';
    check.classList.add('check');
    li.appendChild(check);
}

function addSpan(title, li) {
    let span = document.createElement('span');
    span.classList.add('title');
    span.innerHTML = title;
    li.appendChild(span);
}

