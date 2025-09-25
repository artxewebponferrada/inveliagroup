// get current year
(function () {
    var year = new Date().getFullYear();
    var yearEl = document.querySelector("#currentYear");
    if (yearEl) {
        yearEl.innerHTML = year;
    }
})();

// toggle compact header shadow on scroll
(function () {
    var header = document.querySelector('.header_section');
    if (!header) {
        return;
    }

    var toggleHeaderState = function () {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState, { passive: true });
})();
