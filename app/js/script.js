const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const invisibleElements = document.querySelectorAll('.invisible');

hamburger.addEventListener('click', function() {
    console.log('open menu');

    if(header.classList.contains('open')) { // Close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        invisibleElements.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out');
        });
        
    } 

    else { // Open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        invisibleElements.forEach(function(element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in');
        
        });
        
    }   
})