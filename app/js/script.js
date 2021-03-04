
// Navbar
const hamburger = document.querySelector('.nav-hamburger-menu');
const links = document.querySelector('.nav-links');
const link = document.querySelectorAll('.nav-links li');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    links.classList.toggle('open');
    link.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade .4s ease forwards ${index/8}s`; 
        }
    });

    const overlay = document.querySelector('.nav-background-overlay');
    if(overlay.classList.contains('overlay-in')){
        overlay.classList.toggle('overlay-out');
    } else {
        overlay.classList.remove('overlay-out');
        overlay.classList.toggle('overlay-in');
    }
});

const arrow = document.querySelector('.jumbotron-hero-text-arrow');
const arrowImg = document.querySelector('.jumbotron-hero-text-arrow img');

arrow.addEventListener('mouseover', function(){
    arrowImg.src = '/images/icon-arrow-hover.svg';
});
arrow.addEventListener('mouseout', function(){
    arrowImg.src = '/images/icon-arrow.svg'
});

// Event Click Next and Previos
const prevButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const imageHero = document.querySelector('.jumbotron-hero-image');

let indexButton = 1;
const text = document.querySelector('.jumbotron-hero-text');

function fadeIn(waktu) {
    imageHero.classList.add('image-fade-in');
    text.classList.add('text-fade-in');
    setTimeout(() => {
        imageHero.classList.remove('image-fade-in');
        text.classList.remove('text-fade-in');
    }, waktu*1000);
}

prevButton.addEventListener('click', function() {
    fadeIn(1);

    if(indexButton <= 1 ) {
        indexButton = 3;
    } else {
        indexButton --;
    }
    imageHero.style.backgroundImage = `url(/images/desktop-image-hero-${indexButton}.jpg)`;
    document.querySelector('.heading').innerHTML = textHero[indexButton-1].title;
    document.querySelector('.content').innerHTML = textHero[indexButton-1].content;

});


nextButton.addEventListener('click', function() {
    fadeIn(1);
    if(indexButton == 3) {
        indexButton = 1;
    } else {
        indexButton++;
    }
    imageHero.style.backgroundImage = `url(/images/desktop-image-hero-${indexButton}.jpg)`;
    document.querySelector('.heading').innerHTML = textHero[indexButton-1].title;
    document.querySelector('.content').innerHTML = textHero[indexButton-1].content;
});

imageHero.style.backgroundImage = `url(/images/desktop-image-hero-${indexButton}.jpg)`;

const textHero = 
[
    {
        "title": "Discover innovative ways to decorate",
        "content": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        "title": "We are available all across the globe",
        "content": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        "title": "Manufactured with the best materials",
        "content": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]