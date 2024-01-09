const sendInput = document.querySelector('#input');
const items = document.querySelector('.items');
let itemsArray = Array.from(items);
const allItems = document.getElementsByClassName('item');
let itemText = null;

sendInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    itemText = sendInput.value;
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = itemText;
    newItem.addEventListener('click', function () {
      newItem.classList.toggle('done');
    })

    if (itemText != '') {
      items.append(newItem);

    }

    sendInput.value = '';
  }

}

)

















