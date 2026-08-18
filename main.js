// ---------- Storage helpers ----------

// Tasks are stored as objects: { text: string, done: boolean }
function getTasks() {
  const tasks = localStorage.getItem('todoTasks');
  return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
  localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

// ---------- Rendering ----------

function loadTasks() {
  const tasks = getTasks();
  const list = document.getElementById('list');
  list.innerHTML = ''; // clear existing items

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${index}`;
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
      const currentTasks = getTasks();
      currentTasks[index].done = checkbox.checked;
      saveTasks(currentTasks);
      label.classList.toggle('done', checkbox.checked);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `task-${index}`);
    label.textContent = task.text; // textContent avoids HTML injection
    if (task.done) label.classList.add('done');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', `Delete task: ${task.text}`);
    deleteBtn.addEventListener('click', () => {
      const currentTasks = getTasks();
      currentTasks.splice(index, 1);
      saveTasks(currentTasks);
      loadTasks(); // re-render from storage, single source of truth
    });

    li.append(checkbox, label, deleteBtn);
    list.appendChild(li);
  });
}

// ---------- Add task ----------

function addTask(e) {
  e.preventDefault(); // stop the form from actually submitting/navigating

  const input = document.getElementById('name');
  const value = input.value.trim();

  if (value === '') {
    alert('empty content, fill it please');
    return;
  }

  const tasks = getTasks();
  tasks.push({ text: value, done: false });
  saveTasks(tasks);
  loadTasks();

  input.value = '';
  input.focus();
}

const form = document.getElementById('todo-form');
form.addEventListener('submit', addTask);

// ---------- Dark mode ----------

const body = document.body;
const modeButton = document.querySelector('.mode');

function applyDarkModePreference() {
  const isDark = localStorage.getItem('darkMode') === '1';
  body.classList.toggle('dark-mode', isDark);
}

function toggleDarkMode() {
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

modeButton.addEventListener('click', toggleDarkMode);

// ---------- Init ----------

applyDarkModePreference();
loadTasks();
