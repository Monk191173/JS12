'use strict';

let colors = ['red', 'yellow', 'green'];
let count = 0;
let boxColor = document.getElementsByClassName('color')[0];


function changeColor() {
    boxColor.style.backgroundColor = colors[count];
    count++;
    if (count > colors.length - 1) count = 0;
}
boxColor.addEventListener('mouseover', changeColor);

boxColor.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'violet';
});
/**----------------------------------------------------------------- */


let boxSecret = document.getElementsByClassName('secret')[0];

function MouseUpOver() {
    boxSecret.style.backgroundColor = 'yellow';
    boxSecret.innerText = 'Хочеш знати який?';
    boxSecret.style.color = 'blue';
}
boxSecret.addEventListener('mouseover', MouseUpOver);

boxSecret.addEventListener('mouseup', MouseUpOver);

boxSecret.addEventListener('mousedown', () => {
    boxSecret.style.backgroundColor = 'black';
    boxSecret.style.color = 'white';
    boxSecret.innerText = 'А я тобі не скажу!';
});

boxSecret.addEventListener('mouseout', () => {
    boxSecret.style.backgroundColor = 'violet';
    boxSecret.style.color = 'blue';
    boxSecret.innerText = 'У мене є секрет!';
});
/**-------------------------------------------------------------------- */


let boxImage = document.getElementsByClassName('image')[0];
boxImage.addEventListener('click', (event) => {
    if (event.target.className == 'image__box')
        event.target.style.backgroundImage = 'url(' + prompt('url of image') + ')';
});


/**-------------------------------------------------------------------- */

function setTxtColor() {
    if (event.target.tagName == 'LI') event.target.style.color = event.target.innerText;
}
