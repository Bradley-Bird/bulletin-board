import { pushPost, checkAuth } from '../fetch-utils.js';

const postForm = document.getElementById('post');
const title = document.getElementById('title-submit');
const postContent = document.getElementById('post-submit');
const contact = document.getElementById('contact-submit');

//checkAuth
checkAuth();
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log('test',title.value, postContent.value, contact.value);
    const newRow = await pushPost({
        title: title.value,
        post: postContent.value,
        contact: contact.value,
    });
    console.log(newRow);
});
