import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const data = {};

populateInputForm();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function onTextareaInput() {
  data.email = form.email.value;
  data.message = form.message.value;

  const values = JSON.stringify(data);

  localStorage.setItem(FEEDBACK_FORM_STATE, values);
}

function populateInputForm() {
  const savedInput = localStorage.getItem(FEEDBACK_FORM_STATE);
  const storageInput = JSON.parse(savedInput);

  if (storageInput) {
    form.email.value = storageInput.email;
    form.message.value = storageInput.message;
    console.log(storageInput);
  }
}
