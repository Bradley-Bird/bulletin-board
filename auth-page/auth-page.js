const inForm = document.getElementById('sign-in');
const inEmail = document.getElementById('sign-in-email');
const inPassword = document.getElementById('sign-in-password');

const upForm = document.getElementById('sign-up');
const upEmail = document.getElementById('sign-up-email');
const upPassword = document.getElementById('sign-up-password');

upForm.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(upEmail.value, upPassword.value, 'hello');
});

inForm.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(inEmail.value, inPassword.value, 'hello1');
});
