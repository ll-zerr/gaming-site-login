/* When user clicks button, toggle between hiding and showing dropdown content */
function selectLanguage() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* close the dropdown if user clicks outside of content */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};