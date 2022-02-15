import { getPosts } from './fetch-utils.js';
import { renderBoard } from './utils.js';

// import functions and grab DOM elements
const board = document.getElementById('board');
// let state
window.addEventListener('load', async () => {
    const posts = await getPosts();

    for (let post of posts) {
        const postEl = renderBoard(post);
        board.append(postEl);
    }
    return board;
});

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
