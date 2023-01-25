import throttle from 'lodash.throttle';

const STORAGE_TEXT = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onEmailInput);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateInputEmail();
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_TEXT);
}

function onEmailInput(e) {
  const email = e.target.value;

  localStorage.setItem(STORAGE_TEXT, email);
}

function populateInputEmail(e) {
  const savedEmail = localStorage.getItem(STORAGE_TEXT);

  if (savedEmail) {
    console.log(savedEmail);
  }
  refs.input.value = savedEmail;
}

function onTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_TEXT, message);
}

function populateTextarea(e) {
  const savedMsg = localStorage.getItem(STORAGE_TEXT);

  if (savedMsg) {
    console.log(savedMsg);
  }
  refs.textarea.value = savedMsg;
}
