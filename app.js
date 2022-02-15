import { getPosts } from './fetch-utils.js';
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
    return board;
});

logButton.addEventListener('click', () => {
    location.replace(`./auth-page/index.html`);
});

// get user input

// use user input to update state
// update DOM to reflect the new state
