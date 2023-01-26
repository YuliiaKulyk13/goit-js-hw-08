import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const data = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateInputForm();

function onFormSubmit(e) {
  e.preventDefault();

  data.email = form.email.value;
  data.message = form.message.value;

  if (form.email === '' || form.message === '') {
    return;
  }

  e.currentTarget.reset();
  localStorage.removeItem(KEY_STORAGE);
}

function onTextareaInput() {
  data.email = form.email.value;
  data.message = form.message.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
}

function populateInputForm() {
  const savedInput = localStorage.getItem(KEY_STORAGE);

  if (savedInput) {
    const storageInput = JSON.parse(savedInput);

    form.email.value = storageInput.email;
    form.message.value = storageInput.message;
  }
}
