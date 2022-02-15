import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderBoard } from './utils.js';

// import functions and grab DOM elements
const logButton = document.getElementById('logButton');

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
// get user input

// use user input to update state
// update DOM to reflect the new state
