// DOM Selectors
const form = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks') // anchor element
const description = document.querySelector('#description')

// Event listners
form.addEventListener('submit', addTask)

// Event handlers
function addTask(event){
  // "get data"
  event.preventDefault()
  console.log('description: ', description.value);
  console.log(event.target.description.value)
  renderTask(event.target.description.value)
  form.reset()
} 

function editTask(e, li){
  e.preventDefault()
  // console.dir(li)
  const deleteBtn = li.querySelector(':nth-child(1)')
  const editBtn = li.querySelector(':nth-child(2)')
  console.log('deleteBtn: ', deleteBtn);
  li.textContent = e.target.editTask.value
  li.append(deleteBtn, editBtn)
}

// Render functions

function renderTask(taskString){
  // element creations
  const newTask = document.createElement('li')
  const deleteBtn = document.createElement('button')
  const editBtn = document.createElement('button')
  // assign values and attributes
  newTask.textContent = taskString
  deleteBtn.textContent = 'Delete'
  deleteBtn.style.color = 'red'
  editBtn.textContent = "Edit"
  //appending
  newTask.append(deleteBtn, editBtn)
  taskList.append(newTask)

  // event listeners
  deleteBtn.addEventListener('click', () => newTask.remove())
  editBtn.addEventListener('click', () => renderEditForm(newTask, taskString))
}

function renderEditForm(li, taskstring){
  console.log('li: ', li);
  const editForm = document.createElement('form')
  const inputField = document.createElement('input')
  const submitBtn = document.createElement('button')

  inputField.type = 'text'
  inputField.name = 'editTask'
  inputField.placeholder = taskstring
  submitBtn.type = 'submit'
  submitBtn.textContent = 'Change'

  editForm.append(inputField, submitBtn)
  li.append(editForm)

  editForm.addEventListener('submit', (e) => editTask(e, li))
}


