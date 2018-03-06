var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lola.jpg') {
        myImage.setAttribute('src', 'images/squeaky-tennis-ball.jpg');
    } else {
        myImage.setAttribute('src', 'images/lola.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Yo ' + myName + '!';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Yo ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}