let newInput = document.getElementById('newInput');
let addBtn = document.getElementById('addBtn');
let list = document.getElementById('list');
let tasks = document.getElementsByTagName('li');

addBtn.addEventListener('click', () => {
  let taskName = newInput.value;
  if(taskName == null || taskName === ''){
    return
  } else {
    let newTask = document.createElement('li')
    newTask.innerHTML = taskName
    list.insertBefore(newTask, list.childNodes[0])
    newInput.value = null
  }
})

list.addEventListener('click', e => {
  if(e.target.tagName = 'li'){
    e.target.classList.toggle('complete')
  }
})