const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<header><div class="header">Event Board</div><button id="loginButton">Login</button><button id="createPost">Create post</button></header><main><section id="board"><div class="post"><h2>Pep talk party!</h2><p>Exactly how it sounds! Come get fired up for your next project!</p><p>Bradley Bird 555-555-5555</p></div></section></main><footer><div></div></footer>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderBoard();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
