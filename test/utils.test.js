import { renderBoard } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post"><h2>Pep talk party!</h2><p>Exactly how it sounds! Come get fired up for your next project!</p><p>Bradley Bird 555-555-5555</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderBoard({
        title: 'Pep talk party!',
        post: 'Exactly how it sounds! Come get fired up for your next project!',
        contact: 'Bradley Bird 555-555-5555',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
