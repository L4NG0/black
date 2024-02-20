function toggleVisibility() {
    const menu = document.querySelector('.header__menu');
    const isVisible = menu.classList.contains('visible');

    document.querySelectorAll('.navigation-icon').forEach(element => {
        element.classList.toggle('visible');
    });

    document.querySelector('.header__banner').classList.toggle('header__banner-border', !isVisible);

    menu.classList.toggle('visible', !isVisible);
    menu.classList.toggle('invisible', isVisible);
}

function scroll(e) {
    e.preventDefault()
    const element = this.getAttribute('data-section');
    const goToSection = "#" + element;
    let targetElement = document.querySelector(goToSection);

    if (targetElement) {
        // const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}


function underline() {
    let about = document.querySelector('.section-about').offsetTop;
    let feedback = document.querySelector('.section-opinion').offsetTop;
    let offer = document.querySelector('.section-offer').offsetTop;
    let gallery = document.querySelector('.section-gallery').offsetTop;
    let contact = document.querySelector('.section-contact').offsetTop;


    if (window.scrollY < about) {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="start"]').classList.add('underline');

    }
    else if (window.scrollY < feedback) {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="about"]').classList.add('underline');
    }
    else if (window.scrollY < offer) {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="thoughts"]').classList.add('underline');
    }
    else if (window.scrollY < gallery) {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="offer"]').classList.add('underline');
    }
    else if (window.scrollY < contact) {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="gallery"]').classList.add('underline');
    }
    else {
        document.querySelectorAll('.header__menu__item a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelector('[data-section="contact"]').classList.add('underline');
    }
}

window.addEventListener('scroll', underline);

document.querySelectorAll('.header__menu__item a').forEach(element => {
    element.addEventListener('click', scroll);
    element.addEventListener('click', toggleVisibility);
});
document.querySelectorAll('.navigation-icon').forEach(element => {
    element.addEventListener('click', toggleVisibility);
});

document.querySelectorAll('.section-start__logo__element').forEach(element => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.section-start__logo__element').forEach(el => {
            el.classList.toggle('visible');
        });
    });
});
