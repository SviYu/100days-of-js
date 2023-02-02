const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearBtn = document.querySelector('.clearBtn')
const checkAllBtn = document.querySelector('.checkAll')
const unCheckAllBtn = document.querySelector('.unCheckAll')


function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemList);
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();
    
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item-${i}" ${plate.done ? 'checked' : ''}/> 
            <label for="item-${i}">${plate.text}</label>
        </li>
        `
    }).join('');
}

//Save toggle status in localstorage
function toggleDone(e) {
    if (!e.target.matches('input')) return; //skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList)
}

//Clear all function
function clearAll() {
    localStorage.clear();

    //refresh page immediately after btn was clicked
    location.reload();
}

function checkAll() {
    for (let i = 0; i < items.length; i++){
        items[i].done = true;
    }
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList)
}
function unCheckAll() {
    for (let i = 0; i < items.length; i++){
        items[i].done = false;
    }
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList)
}

addItems.addEventListener('submit', addItem)
itemList.addEventListener('click', toggleDone)
clearBtn.addEventListener('click', clearAll)
checkAllBtn.addEventListener('click', checkAll)
unCheckAllBtn.addEventListener('click', unCheckAll)

populateList(items, itemList)
