# Rocks, Paper, Scissors

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
<!--   - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview
Creating a web app that can be used to play the game: Rock, Paper, Scissors, was the main aim of this project
but due to new things I learnt in the previous two months I decided to also make the app a PWA (Progressive Web Application).

That means the web application have the features and looks of a normal native app on a device if installed, yes, you can install it as an app on your device.

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- [ ] Maintain the state of the score after refreshing the browser (IN PROGRESS)

<!-- ### Screenshot

![](./screenshot.jpg) -->

### Links

- Solution URL: [https://github.com/sodiqsanusi/rock-paper-scissors/]()
- Live Site URL: [https://rockspaperscissor.netlify.app/]()

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Redux Toolkit](https://redux-toolkit.js.org/) - As a state management system


### What I learned

I had to learn more on advanced react APIs like the `React.memo` and the `React.useLayoutEffect` during the development of this project
and it was really nice to know more about what the react ecosystem entails.

I also had to brush up on creating optimal service workers in react applications, due to the hashing and bundling of static assets I 
had some problems with getting them cached and available offline. Learnt on how to avoid and solve that bug.

### Continued development

Building this project has made me realise that optimizing performance on a HTML/CSS/JS website is quite different from
Javascript web applications and this is something I'm planning to learn more on: Optimization of Javascipt web applications.

### Useful resources

- [Thinking In React](https://reactjs.org/docs/thinking-in-react.html) - At a point I was confused and lost on the best architecture to use while building this app, this article helped me clarify that and is an article I recommend reading on.

## Acknowledgments

Special thanks to the Frontend Mentor team for the designs of this application and to me also, cus I deserve it🙂.
