const titleInput = document.getElementById("title");
const descInput = document.getElementById("desc");
const addBtn = document.getElementById("addTodo");
const assignedDiv = document.getElementById("assigned");
const completedDiv = document.getElementById("completed");

addBtn.addEventListener("click", handleAddTodo);

function handleAddTodo() {
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (!title || !desc) {
    alert("Please fill both fields");
    return;
  }

  if (editIndex !== null) {
    assignedTodos[editIndex] = { title, desc };
    editIndex = null;
    addBtn.textContent = "Add Todo";
  } else {
    assignedTodos.push({ title, desc });
  }

  clearInputs();
  saveTodos();
  render();
}

assignedDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("complete")) {
    completeTodo(e.target.dataset.index);
  }

  if (e.target.classList.contains("edit")) {
    editTodo(e.target.dataset.index);
  }
});

completedDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-again")) {
    addAgain(e.target.dataset.index);
  }
});

function renderAssigned() {
  assignedDiv.innerHTML = "";

  assignedTodos.forEach((todo, index) => {
    assignedDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="todo">
        <strong>${todo.title}</strong>
        <p>${todo.desc}</p>
        <div class="actions">
          <button class="complete" data-index="${index}">✔ Complete</button>
          <button class="edit" data-index="${index}">✏ Edit</button>
        </div>
      </div>
      `
    );
  });
}

function renderCompleted() {
  completedDiv.innerHTML = "";

  completedTodos.forEach((todo, index) => {
    completedDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="todo completed">
        <strong>${todo.title}</strong>
        <p>${todo.desc}</p>
        <button class="add-again" data-index="${index}">↩ Add Again</button>
      </div>
      `
    );
  });
}

function editTodo(index) {
  titleInput.value = assignedTodos[index].title;
  descInput.value = assignedTodos[index].desc;
  editIndex = index;
  addBtn.textContent = "Update Todo";
}

