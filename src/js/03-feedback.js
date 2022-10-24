import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormData, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormData(event) {
  const formData = getFormDataFromLocalStorage();
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getFormDataFromLocalStorage() {
  const dataString = localStorage.getItem('feedback-form-state');
  if (!dataString) {
    return {
        "email": "",
        "message": ""
    };
  }
  return JSON.parse(dataString);
}

function onFormSubmit(event) {
  event.preventDefault();
  const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(userData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function loadDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    email.value = data.email;
    message.value = data.message;
  }
})();
