document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();
        const targetSection = document.getElementById(this.getAttribute('href').slice(1));
        if (targetSection) {
            window.scrollTo(0, targetSection.offsetTop - 60);
        }
    };
});