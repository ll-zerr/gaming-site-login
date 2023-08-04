const dropbtnContainer = document.querySelector(".dropbtn-container");

/* Add an event listener to the container */
dropbtnContainer.addEventListener("click", selectLanguage);


/* When user clicks button or icon, toggle between hiding and showing dropdown content */
function selectLanguage(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (event.target.matches('.dropbtn, .dropbtn-icon')) {
        dropdownContent.classList.toggle("show");
    } else {
        dropdownContent.classList.remove('show');
    }
}

/* close the dropdown if user clicks outside of content */
window.addEventListener("click", function(event) {
    const dropdownContent = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn, .dropbtn-icon')) {
        dropdownContent.classList.remove('show');
    }
});