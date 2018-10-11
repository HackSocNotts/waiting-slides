# Waiting Slides

A system to automatically transition between slides while people arrive at an event.

## How to use this

Create each slide as an html file, and add all of the slides you'd like as strings in the `slide-list.js` file. For example, assuming the slides were stored in the [slides](slides) directory:
```javascript
slides = [
    "slides/myFirstSlide.html",
    "slides/mySecondSlide.html",
    "slides/myThirdSlide.html"
]
```
If you would like to change the amount of time before each slide transitions, then change the `animation` style for the `.timer` class in [styles.css](styles.css):
```css
.timer
{
    animation: time 10s linear 0s infinite forwards;
}
```