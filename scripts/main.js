var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/masego.jpg') {
      myImage.setAttribute ('src','images/masego1.jpg');
    } else {
      myImage.setAttribute ('src','images/masego.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'masego and coding, ' + myName;
}


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'masego and coding, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
