document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll(".fade-in");

    function revealOnScroll() {
        const windowBottom = window.scrollY + window.innerHeight;

        faders.forEach(el => {
            const elementTop = el.offsetTop;

            if (windowBottom > elementTop + 50) { // 50px de offset
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll); // dispara ao carregar a página
});

