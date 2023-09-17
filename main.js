var form = document.getElementById('addForm');
var item = document.getElementById('items');
var itemList = document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter')

filter.addEventListener('keyup', onFilter);
form.addEventListener('submit' , onsubmit);
item.addEventListener('click', ondelete);

// adding edit button to all the list item
for(let i=0;i<itemList.length;i++) {

  const editBtn = document.createElement('button');
  editBtn.className =  `btn btn-sm float-right editBtn`;
  editBtn.appendChild(document.createTextNode('EDIT'))

  itemList[i].appendChild(editBtn)
}

function onsubmit(e) {
  e.preventDefault();

  const inputvalue = document.getElementById('item').value;
  const description = document.getElementById('description').value;

  const li = document.createElement('li');

  li.className = 'list-group-item';
   
  const newText = document.createTextNode(inputvalue)
  const descriptionNode = document.createTextNode(description)

  li.appendChild(newText);
  li.appendChild(descriptionNode);

  const deleteBtn = document.createElement('button');

  deleteBtn.className = `btn btn-danger btn-sm float-right delete`;

  deleteBtn.appendChild(document.createTextNode('x'))

  li.appendChild(deleteBtn);

  // Adding editButton
  const editBtn = document.createElement('button');
  editBtn.className = `btn btn-sm float-right editBtn`;
  editBtn.appendChild(document.createTextNode('EDit'));

  li.appendChild(editBtn)

  item.appendChild(li)
  }

function ondelete(e) {
  if(e.target.classList.contains('delete')) {

    if(confirm('are you sure?')) {

      const li = e.target.parentElement;

      item.removeChild(li);
    }
  }
}

// filter


function onFilter(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // getting list
  var items = item.getElementsByTagName('li');

  // Converting item from HTML collection to array
  Array.from(items).forEach(function(item) {

    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
      
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


