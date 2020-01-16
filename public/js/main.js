window.onload = function() {
    todo = new Map();
    lastId = 0;
    const newElemInput = document.getElementById('new-elem');
    const list = document.getElementById('list');

    document.getElementById('add-btn').addEventListener('click', function() {
        if (newElemInput.value) {
            let domElem = createDomListElem(newElemInput.value);
            createListElem(newElemInput.value, domElem);
            newElemInput.value = '';
        }
    });
};

class ListElem {

    constructor(title, domElem) {
        this.title = title;
        this.domElem = domElem;
    }

    finish() {
        this.domElem.classList.remove('active');
    }
}

function createDomListElem(title) {
    let newLi = document.createElement('li');
    newLi.classList.add('active');
    newLi.innerHTML = title;
    addOptions(newLi);

    list.appendChild(newLi);

    return newLi;
}

function addOptions(li) {
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
}

function createListElem(title, domElem) {
    let newListElem = new ListElem(title, domElem);
    addElemToList(newListElem);
    console.log(todo)
}

function addElemToList(newListElem) {
    lastId++;
    newListElem.domElem.setAttribute('data-id', lastId);
    todo.set(lastId, newListElem);
}

