const dropbtnContainer = document.querySelector(".dropbtn-container .dropbtn");
const labels = document.querySelectorAll(".form-control label");

// Add an event listener to the footer btn container
if (dropbtnContainer) {
    dropbtnContainer.addEventListener("click", function(event) {
        selectLanguage(event);
    });
}


// When user clicks button or icon, toggle between hiding and showing dropdown content
function selectLanguage(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (event.target.matches('.dropbtn span, .dropbtn-icon')) {
        dropdownContent.classList.toggle("show");
    } else {
        dropdownContent.classList.remove('show');
    }
}

// close the dropdown if user clicks outside of content 
window.addEventListener("click", function(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn span, .dropbtn-icon')) {
        dropdownContent.classList.remove('show');
    }
});

// turn our form label into a responsive span that creates a wave
function animateLabels() {
    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    });
}

// enable translations for language selection
const translations = {
        en: {
            welcome: "Welcome to GlobalGameNet!",
            loginPrompt: "Please Login",
            emailLabel: "Email",
            passwordLabel: "Password",
            loginButtonText: "Login",
            registerText: "Don't have an account? <a href='#'>Register now.</a>",
            footerTop: "For General Inquires, See Below:",
            questionsLink: "FAQ",
            helpLink: "Support",
            merchLink: "Shop",
            termsLink: "Terms of Use",
            privacyLink: "Privacy",
            cookiesLink: "Cookies",
            contactLink: "Contact",
            disclaimerLink: "Disclaimer",
            currentLang: "English"
        },
        fr: {
            welcome: "Bienvenue sur GlobalGameNet !",
            loginPrompt: "Veuillez vous connecter",
            emailLabel: "Courriel",
            passwordLabel: "Mot de passe",
            loginButtonText: "Connexion",
            registerText: "Vous n'avez pas de compte ? <a href='#'>Inscrivez-vous maintenant.</a>",
            footerTop: "Pour toute question générale, voir ci-dessous :",
            questionsLink: "FAQ",
            helpLink: "Aide",
            merchLink: "Boutique",
            termsLink: "Conditions d'utilisation",
            privacyLink: "Confidentialité",
            cookiesLink: "Paramètres du tésmoins",
            contactLink: "Contact",
            disclaimerLink: "Clause de non-responsabilité",
            currentLang: "Français"
        }
};

function setLanguage(lang) {
    const selectedLanguage = document.getElementById("selectedLanguage");
    selectedLanguage.innerText = translations[lang].currentLang;
    document.querySelector("h1").innerText = translations[lang].welcome;
    const h2 = document.querySelector("h2");
    if (h2) h2.innerText = translations[lang].loginPrompt;
    document.querySelector("label[for='email']").innerText = translations[lang].emailLabel;
    document.querySelector("label[for='password']").innerText = translations[lang].passwordLabel;
    document.querySelector(".btn").innerText = translations[lang].loginButtonText;
    document.querySelector(".text").innerHTML = translations[lang].registerText;
    document.querySelector(".footer-top").innerHTML = translations[lang].footerTop;
    document.querySelector(".questions a").innerText = translations[lang].questionsLink;
    document.querySelector(".help a").innerText = translations[lang].helpLink;
    document.querySelector(".merch a").innerText = translations[lang].merchLink;
    document.querySelector(".terms a").innerText = translations[lang].termsLink;
    document.querySelector(".privacy a").innerText = translations[lang].privacyLink;
    document.querySelector(".cookies a").innerText = translations[lang].cookiesLink;
    document.querySelector(".contact a").innerText = translations[lang].contactLink;
    document.querySelector(".disclaimer a").innerText = translations[lang].disclaimerLink;
    animateLabels();
}

const languageLinks = document.querySelectorAll(".dropdown-content a");
// console.log(languageLinks);
if (languageLinks.length > 1 ) {
languageLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        setLanguage(selectedLang);
    });
});
} else {
    console.log("Only one language option available");
}

// setLanguage("en");
animateLabels();

document.querySelectorAll('.faq-content p').forEach(p => {
    p.style.display = 'none';
});

// enable view of answers on the FAQ page
const faqIcons = document.querySelectorAll(".faq-icon");

faqIcons.forEach(icon => {
    icon.addEventListener("click", function() {
        const questionDiv = this.parentElement;
        const answerPara = questionDiv.nextElementSibling;
        // toggle the visibility of the answer paragraph
        answerPara.style.display = answerPara.style.display === 'none' ? 'block' : 'none';
        // rotate the icon 45 degrees if the answer is visible, or reset it if not
        this.style.transform = answerPara.style.display === 'none' ? 'rotate(0deg)' : 'rotate(45deg)';
    });
});

// Show or hide disclaimer or cookie preferences box
const bodyElement = document.body; //select the body element
const privacyPage = document.querySelector("main.privacy .content-wrapper");
const privacyContent = document.getElementById("privacy-content");
const termsPage = document.querySelector("main.terms .content-wrapper");
const termsContent = document.getElementById("terms-content");

function setupPopup(linkSelector, boxSelector, closeSelector) {
    const chosenLink = document.querySelector(linkSelector);
    const chosenBox = document.querySelector(boxSelector);
    const closeButton = document.querySelector(closeSelector)

    chosenLink.addEventListener("click", function(event) {
        event.preventDefault();
        chosenBox.classList.add("show");
        window.scrollTo({top:0, left:0, behavior: 'smooth'});
    
        if (bodyElement.classList.contains("privacy")) {
            privacyContent.style.backgroundColor = "rgba(10, 35, 81, 0.5)";
            privacyPage.style.backgroundColor = "rgba(10, 35, 81, 0.5)";
        } else if (bodyElement.classList.contains("terms")) {
            termsContent.style.background = "rgba(10, 35, 81, 0.5)";
            termsPage.style.backgroundColor = "rgba(10, 35, 81, 0.5)";
        }
    });

    closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // prevent the click event from bubbling up to the parent box
        chosenBox.classList.remove("show");
    
        if (bodyElement.classList.contains("privacy")) {
            privacyContent.style.backgroundColor = "white";
            privacyPage.style.backgroundColor = "white";
        } else if (bodyElement.classList.contains("terms")) {
            termsContent.style.background = "white";
            termsPage.style.backgroundColor = "white";
        }
    });
}

setupPopup(".link-item.disclaimer a", ".disclaimer-box", ".disclaimer-close-btn");
setupPopup(".link-item.cookies a", ".cookies-box", ".cookies-close-btn");

// select cookie preferences for each section with the option
const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("change", function() {
        const label = this.nextElementSibling;
        const ball = label.querySelector(".ball");
        
        if (this.checked) {
            label.classList.add("on");
            label.classList.remove("off");
            ball.classList.add("slideOn");
            ball.classList.remove("slideOff");
        } else {
            label.classList.add("off");
            label.classList.remove("on");
            ball.classList.add("slideOff");
            ball.classList.remove("slideOn");
        }
    });
});

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