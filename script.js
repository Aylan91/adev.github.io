document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", function() {
            alert("Vous avez cliqué sur " + this.querySelector("h3").innerText);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
