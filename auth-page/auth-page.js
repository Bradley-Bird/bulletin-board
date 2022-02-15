import { inUser, upUser, loggedInReplace } from '../fetch-utils.js';

const inForm = document.getElementById('sign-in');
const inEmail = document.getElementById('sign-in-email');
const inPassword = document.getElementById('sign-in-password');

const upForm = document.getElementById('sign-up');
const upEmail = document.getElementById('sign-up-email');
const upPassword = document.getElementById('sign-up-password');

upForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(upEmail.value, upPassword.value, 'hello');
    await upUser(upEmail.value, upPassword.value);
    loggedInReplace();
});
// console.log(await upUser(),'hello');

inForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(inEmail.value, inPassword.value, 'hello1');
    await inUser(inEmail.value, inPassword.value);
    loggedInReplace();
});
loggedInReplace();
