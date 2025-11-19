const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clear = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items= itemList.querySelectorAll('li');

function addItem(event) {
    event.preventDefault(); // prevent form submission

    const newItem = itemInput.value;

    // validate Input
    if (newItem === '') {
        alert('Please enter an item');
        return;
    }

    // create new list item
const li = document.createElement('li');
li.appendChild(document.createTextNode(newItem));

const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = ''; // clear input    
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button; 
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(event) {
    if (event.target.parentElement.classList.contains('remove-item')) {
        event.target.parentElement.parentElement.remove();
    }
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
function checkUI () {
if (items.length === 0) {
 clearBtn.style.display = 'none';
 itemFilter.style.display = 'none';

} else {
 clearBtn.style.display = 'block';
 itemFilter.style.display = 'block';
}
}


// event listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clear.addEventListener('click', clearItems);

checkUI();