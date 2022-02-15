export function renderBoard(board) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const contact = document.createElement('p');

    div.classList.add('post');
    h2.textContent = `${board.title}`;
    p.textContent = `${board.post}`;
    contact.textContent = `${board.contact}`;
    div.append(h2, p, contact);
    return div;
}
