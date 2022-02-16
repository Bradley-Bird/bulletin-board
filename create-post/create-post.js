import { pushPost, checkAuth, loggedInReplace, logout } from '../fetch-utils.js';

const postForm = document.getElementById('post');
const title = document.getElementById('title-submit');
const postContent = document.getElementById('post-submit');
const contact = document.getElementById('contact-submit');

const homeBtn = document.getElementById('home');
const logoutBtn = document.getElementById('log-button');

//checkAuth
checkAuth();
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('test',title.value, postContent.value, contact.value);
    await pushPost({
        title: title.value,
        post: postContent.value,
        contact: contact.value,
    });
    postForm.textContent = '';
    loggedInReplace();
});

homeBtn.addEventListener('click', () => {
    loggedInReplace();
});
logoutBtn.addEventListener('click', logout);
