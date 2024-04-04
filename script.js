document.documentElement.className = "js";

let menu = document.querySelector( '.menu' ),
    button = document.querySelector('.nav-toggle'),
    dropdown = document.querySelector('.dropdown');

button.onclick = function() {
    classie.toggle( menu, 'menu-active' );
};

document.addEventListener('click', function(event) {
    if (event.target !== dropdown && !dropdown.contains(event.target)) {
        
      classie.removeClass(menu, "menu-active");
    }
});


( function( window ) {

'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

let hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  let fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

let classie = {
  
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


if ( typeof define === 'function' && define.amd ) {
  
  define( classie );
} else if ( typeof exports === 'object' ) {
  
  module.exports = classie;
} else {
  
  window.classie = classie;
}

})( window );


let factPlaceholder = document.getElementById("fun-fact");
let showFact = document.getElementById("show-fact");



let funFacts = ["I have lived in 5 states,Texas, Nevada, Georgia, Colorado, and New York City",
               "At 11 years old I met Hall of Fame Basketball Player Kareem Abdul Jabbar",
               "In The Army I did a Ruck March that was 16 miles in 6 Hours",
               "I was born and Raised in Las Vegas, Nv",
               "One of My favorite Foods is Thai Food"]

let factNumber;

function randomFact(){
  return funFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

