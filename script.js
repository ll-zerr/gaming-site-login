const dropbtnContainer = document.querySelector(".dropbtn-container");
const labels = document.querySelectorAll(".form-control label");

// Add an event listener to the footer btn container
dropbtnContainer.addEventListener("click", selectLanguage);


// When user clicks button or icon, toggle between hiding and showing dropdown content
function selectLanguage(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (event.target.matches('.dropbtn, .dropbtn-icon')) {
        dropdownContent.classList.toggle("show");
    } else {
        dropdownContent.classList.remove('show');
    }
}

// close the dropdown if user clicks outside of content 
window.addEventListener("click", function(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn, .dropbtn-icon')) {
        dropdownContent.classList.remove('show');
    }
});

// turn our form label into a responsive span that creates a wave
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});