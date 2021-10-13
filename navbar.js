const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');
    //Toggle Navigation 

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7}s`;
            }

        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });

}

navSlide();