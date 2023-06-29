# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects and would highly recommend it. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

### Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![My Solution](./design/Solution.png)



### Link
- Live Site: [Live Site](https://devjhex-interactive-rating-component.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned:
### how to approach a project
  - I learnt how to approach a project before even before any of the coding or even thinking of what i'm technologies i'm going to use. Look at the project, know it's semantics that is what the heading or piece of information means maybe why it is there in that particular place, if possible make research of how other ideas of the same project look like. This helps you to build your confidence.
### how to divide a project
  - I learnt how to divide my project into smaller pieces. This is the most important thing in all the things i learnt from this because it helped me not only in this project but in all my tasks.If you're a new into tech and your intimidated on how other developers have to write into like hundreds of files, don't worry because it's just a gigantic task broken down into smaller tasks

     **(this can also help you have personal project ideas, you might ask yourself "Why can't i make a tool that helps me automate this group of tasks?")**

### How to write real resets
 - If you're a hard CSS coder this might be helpful and the reason it is really helpful is because for a long time a lot of developers have issues with simple styles just because of not writing real resets and when i mean real  resets i don't mean this:
 ```css
 * {
  margin:0;
  padding:0;
  box-sizing:border-box;
 }
 ```
I mean resets on almost every element you use in your code like html, headings , paragraphs, unordered lists buttons and many other elements. This is because almost all these elements have default styles and to be honest these default styles are looked on by most  developers out there who are just starting out in the tech industry and yet cause chaos during your styling, you may find yourself:
 -  trying to give something padding or margin but its not moving at all and you're so pissed at yourself like 😠
 - trying to give an element a sort of styling but it looks different when you give it that particular style and many other issues.

 *When you write real applicable resets it gives you the steering wheel of applying what you want where you want but also it helps in debugging or trying to find out where you went wrong in your styles*

### Best lines that I don't regret learning
*We know that centering an element within a short time would be using {margin 0 auto} which is really useful. It gives some margin to the top and bottom (in our case it gives 0 on the top and bottom) and shares remaining space equally to the right and left so as to center the element (Note: the element has to have width and height to work)*
```css
element {
  width:100px;
  height:100px;
  margin: 0 auto; /* This centers the element */
}
```
*And as we know we cannot center the element without altering the top and bottom margins of an element. Luckily this is where the margin-inline property comes in handy. It gives us the way of centering a element without altering the top and bottom margins of an element(it only alters the right and left margins of an element). So the above code could be written like this:* 
```css
element {
  margin-inline:auto; /* This centers an element */
}
```
*This is the best take away that i really loved when it comes to the lines of code i wrote for this project*

### Continued development

Areas that i would like to focus on more is perfecting how to approach a project because this is the most important stage of it all (the initial stage). This has to do with asking yourself questions like: "How are you going to start?", "What technologies are you going to use?", "Why are you going to use those technologies?" and so on. This gives you a better understanding of how you are going to approach a project and as said it boosts your confidence.



## Author

- Frontend Mentor - [@Dev-Jhex](https://www.frontendmentor.io/profile/Dev-Jhex)
- Twitter - [@devJhex](https://www.twitter.com/devJhex)
