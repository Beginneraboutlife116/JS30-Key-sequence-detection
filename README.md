# Key sequence detection

## Table of contents
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- close the dialog via `Escape` key.
- input the right sequence of the keys to match the secret word.
- show an pulse animation once the input is correct to secret word.

### Screenshot

![picture](./src/img/Key%20sequence%20Detection.png)

### Links

- [Solution URL](https://github.com/Beginneraboutlife116/JS30-Key-sequence-detection)
- [Live Site URL](https://beginneraboutlife116.github.io/JS30-Key-sequence-detection/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

- [`Array.prototype.splice(start, deleteCount, items)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

- [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
  - especially when we want to use default method, like pressing the `Escape` key, or clicking the "Close" button in the `<form method="dialog">` to close the dialog, we need to make sure that our dialog was opened by `showModal()` not `show()`.
  - also, we can't change the `display` of `<dialog>`, otherwise the default method to close dialog would be failed.
- How to make a pulse animation which is inspired by [this video of Kevin Powell](https://www.youtube.com/watch?v=_bglQ-6T0r8)