const dropbtnContainer = document.querySelector(".dropbtn-container");
const labels = document.querySelectorAll(".form-control label");

// Add an event listener to the footer btn container
dropbtnContainer.addEventListener("click", selectLanguage);


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
            currentLang: "Français"
        }
};

function setLanguage(lang) {
    const selectedLanguage = document.getElementById("selectedLanguage");
    selectedLanguage.innerText = translations[lang].languageName;
    document.querySelector("h1").innerText = translations[lang].welcome;
    document.querySelector("h2").innerText = translations[lang].loginPrompt;
    document.querySelector("label[for='Email']").innerText = translations[lang].emailLabel;
    document.querySelector("label[for='Password']").innerText = translations[lang].passwordLabel;
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
    document.querySelector(".dropbtn span").innerText = translations[lang].currentLang;
    animateLabels();
}

const languageLinks = document.querySelectorAll(".dropdown-content a");
languageLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        setLanguage(selectedLang);
    });
});

setLanguage("en");
animateLabels();