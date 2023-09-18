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

// Show or hide disclaimer pop-up box
const disclaimerLink = document.querySelector(".link-item.disclaimer a");
const disclaimerBox = document.querySelector(".disclaimer-box");
const closeButton = document.querySelector(".close-btn");
const bodyElement = document.body; //select the body element
const privacyPage = document.querySelector("main.privacy .content-wrapper");
const privacyContent = document.getElementById("privacy-content");
const termsPage = document.querySelector("main.terms .content-wrapper");
const termsContent = document.getElementById("terms-content");


disclaimerLink.addEventListener("click", function(event) {
    event.preventDefault();
    disclaimerBox.classList.add("show");
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
    event.stopPropagation(); // prevent the click event from bubbling up to the disclaimer box
    disclaimerBox.classList.remove("show");

    if (bodyElement.classList.contains("privacy")) {
        privacyContent.style.backgroundColor = "white";
        privacyPage.style.backgroundColor = "white";
    } else if (bodyElement.classList.contains("terms")) {
        termsContent.style.background = "white";
        termsPage.style.backgroundColor = "white";
    }
    
});

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
