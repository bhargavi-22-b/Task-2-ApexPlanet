// ====== Contact Form Validation =======
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateContactForm() {
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Full Name is required.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Subject validation
  if (subjectInput.value.trim() === '') {
    subjectError.textContent = 'Reason for Contact is required.';
    valid = false;
  } else {
    subjectError.textContent = '';
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Your Message is required.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  return valid;
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  successMessage.textContent = '';

  if (validateContactForm()) {
    // Normally here you'd send data to server...
    successMessage.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
  }
});

// ====== To-Do List Functionality =======
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;

  // Toggle done on click
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent li toggle
    todoList.removeChild(li);
  });

  li.appendChild(delBtn);
  return li;
}

function addTodo() {
  const text = todoInput.value.trim();
  if (text === '') return;
  const todoItem = createTodoItem(text);
  todoList.appendChild(todoItem);
  todoInput.value = '';
  todoInput.focus();
}

addTodoBtn.addEvent
