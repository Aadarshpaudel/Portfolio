
// Display a welcome message in the console

console.log("Welcome to Aadarsh's Portfolio!");

// Select all navigation links

const navLinks = document.querySelectorAll(".nav-links a");

// Add click event to navigation links

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent);

    });

});
