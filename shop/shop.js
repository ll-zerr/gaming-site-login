// loop of slides for product images on shop page
const image = document.getElementById('product_img');
const images = ['images/hoodie-heathergrey_c1.png', 'images/youth_hoodie-charcoal-copy.png', 'images/tshirt-red-copy.png', 'images/stickers_ggn-copy.png']
let currentImageIndex = 0;

function fadeIn(element) {
    let op =0.1;
    let timer = setInterval(function () {
        if (op >=1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op +=0.1;
    }, 50);
}

function fadeOutAndCallback(image, callback) {
    let opacity = 1;
    let timer = setInterval(function() {
        if(opacity < 0.1) {
            clearInterval(timer);
            callback();
        }
        image.style.opacity = opacity;
        opacity -=0.1;
    }, 100);
}

function changeImage() {
    fadeOutAndCallback(image, function() {
        image.src = images[currentImageIndex];
        fadeIn(image);
        // Move to the next image in the array, reset to the first image if at the end of the array
        currentImageIndex = (currentImageIndex + 1) % images.length;
    });
}

changeImage(); // Initially load the first image
setInterval(changeImage, 4500);


// Event listener for product preview
const productPreviewBtn = document.querySelector('.product-preview')
const slideshow = document.querySelector('.slideshow');
const slideCloseBtn = document.querySelector(".slideshow-close-btn");

productPreviewBtn.addEventListener('click', function() {
    slideshow.style.display = "block";
    slideCloseBtn.style.visibility = "visible";
    productPreviewBtn.style.display = "none";

    slideCloseBtn.addEventListener('click', function() {
        slideshow.style.display = "none";
        slideCloseBtn.style.visibility = "hidden";
        productPreviewBtn.style.display = "flex";
    })

    const mediaQuery = window.matchMedia('(max-width: 499px)');  // Add a listener for the media query
    mediaQuery.addEventListener('change', function(e) {
        if (e.matches) {
            slideshow.style.display = "block";
            slideCloseBtn.style.visibility = "hidden";
            productPreviewBtn.style.display = "none";
        } else {
            slideshow.style.display = "none";
            productPreviewBtn.style.display = "flex";
        }   
    })
})


// Analogue clock for counter
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {      // Grab the date to get hours, minutes, seconds
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; 
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); 
setDate();

// Event listener for shop page subscription
const checkBox = document.getElementById('toggle');
const subscribe = document.querySelector(".sub");
const thanks = document.querySelector('.thanks');

checkBox.addEventListener("click", function() {
    let isChecked = checkBox.checked;
    console.log(isChecked);
    if (isChecked === true) {
        subscribe.style.opacity = "0";
        thanks.style.opacity = "1";
    } else if (isChecked === false) {
        subscribe.style.opacity = "1";
        thanks.style.opacity = "0";
    }
});