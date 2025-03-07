/*-------------------------- navbar toogle icon ------------------------ */

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");

}

/*-------------------------- scroll sections active link ------------------------ */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    /*-------------------------- sticky navbar ------------------------ */

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*-------------------------- remove toogle icon and navbar when clicked on navbar link ------------------------ */

    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");    

};

/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .back-heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-content, .blog-content, .contact form, .skill-container .card2', { origin: 'bottom' });
ScrollReveal().reveal(' .home-content h1, .about-img, .skill-container .card1', { origin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-content, .blog .btn, .skill-container .card3', { origin: 'right' });

/*-------------------------------------- Typed Js --------------------------------------------*/

const typed = new  Typed('.multi-text', {
    strings: ['Frontend Developer', 'Full Stack Aspirant'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
