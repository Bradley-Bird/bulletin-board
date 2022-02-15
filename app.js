import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderBoard } from './utils.js';

// import functions and grab DOM elements
const logButton = document.getElementById('log-button');
const createPost = document.getElementById('create-post');

const board = document.getElementById('board');
// let state
// set event listeners
window.addEventListener('load', async () => {
    const posts = await getPosts();

    for (let post of posts) {
        const postEl = renderBoard(post);
        board.append(postEl);
    }
    const user = await getUser();
    //checking if user is logged in if yes button.textContent = logout and preforms logout function on click, if not keep textContent of Login and redirect to auth page.
    if (user) {
        logButton.addEventListener('click', logout);
    } else {
        logButton.textContent = `Login`;
        logButton.addEventListener('click', () => {
            location.replace(`./auth-page/index.html`);
        });
    }
});
//do NOT use replace function here, IT WILL LOOP FOREVER.
// loggedInReplace();
createPost.addEventListener('click', () => {
    location.replace(`./create-post/index.html`);
});
// get user input

// use user input to update state
// update DOM to reflect the new state
