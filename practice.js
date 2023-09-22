/**
 * styling the background color of the webpage
 */
// const body = document.body
// body.style.backgroundColor='blue';
// body.style.backgroundColor='#201F2E';


/***
 * styling the font of the heading
 */
// const heading = document.querySelector('h1');
// heading.style.fontFamily = 'Roboto';
// heading.style.color = 'white';


/**
 * Changing text using .innerHTML
 * Modify the header to show the appropriate title for the list
 * Modify the list to show the actual top five harry potter characters
 */
// heading.innerHTML = 'Most popular Harry Potter characters';
// document.getElementById('fourth').innerHTML = 'Professor Snape'; 
// document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';
// document.getElementsByTagName('li')[0].innerHTML = 'Dobby'


/**
 * Create and insert Elements
 * Create a an element for professor Dumbledore and add it to the list
 */
// const dumbledore = document.createElement('li');
// dumbledore.id = 'sixth';
// dumbledore.innerHTML = 'Professor Dumbledore';
// console.log('adding element: ', dumbledore);
// document.querySelector('ol').appendChild(dumbledore);


/**
 * Remove an element, removes a specified child from a parent element
 */
// const elementToRemove = document.querySelector('#sixth');
// console.log('removing element: ', elementToRemove);
// elementToRemove.parentElement.removeChild(elementToRemove);


/***
 * Adding a click event to a DOM element 
 * adding a button element ( <button id="myButton">Click Me</button> ) to HTML 
 * Then adding a click event to it
 */

// const btnElement = document.querySelector('#myButton');
// function handleClick() {
//     alert("You clicked the button!");
// }
// btnElement.addEventListener('click', handleClick);

/**
 * remove event listener using .removeEventListener();
 * This code will be added to the handleClick function
 */


/**
 * Using Events to change the background color and width of an element when the mouse hovers on the element
 * Then reseting the element once the mouse leaves the element
 */
// const box = document.getElementById('box');
// const originalBoxWidth='';
// const originalBoxColor = '';
// function increaseWidthAndChangeColor(){
//     originalBoxWidth = box.style.width;
//     originalBoxColor= box.style.color;
//     box.style.width = '500px';
//     box.style.backgroundColor = 'yellow';
//   }

// function resetBox(){
//     box.style.width = originalBoxWidth;
//     box.style.backgroundColor = originalBoxColor;
//     box.style.width = '400px';
//     box.style.backgroundColor = '#141c3a';
// }

// box.addEventListener('mouseover', increaseWidthAndChangeColor)
// box.addEventListener('mouseout', resetBox )