# Before ES6 - var was king! 👑

### TLDR; ⚠️ DON'T USE var ⚠️

Before ES6 (ES2015) there was only one way to declare variables and constants in JavaScript, which was using `var`.

But var was the cause of some var-y (😅) pesky bugs and strange behaviour due, often, to scoping issues.

Below we have a forLoop inside a function `count()` that uses `var`

You'll notice that we can access the value of `i` inside _and outside_ of the forLoop...

## Task 1:

👉 Call the function count() and run `node let_vs_var.js` to see what gets printed to the console!

...

//Results
0 inside the forLoop
1 inside the forLoop
2 inside the forLoop
3 inside the forLoop
4 inside the forLoop
5 outside the forLoop
Not today, pal! �

Well, that's interesting! 😯

As you can imagine, this isn't the behaviour that we want...

## Task 2:

Another problem with var is that we can overwrite it.

This might not seem like a big deal... but in a massive code base - overwriting variables without realising is a big issue 🙈

👉 Replace all the vars in this file with `let` so we get the behaviour we expect!

// The code would throw a SyntaxError: Identifier 'greeting' has already been declared.

## Handy Hint:

You should now get some helpful console Errors from JavaScript warning us that `i` is not defined, and `greeting` has already been declared.

Sweet!
