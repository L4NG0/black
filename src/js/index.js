function visible() {
    document.querySelectorAll('.navigation-icon').forEach(element => {
        element.classList.toggle('visible');
    });
    document.querySelectorAll('.menu__list').forEach(element => {
        element.classList.toggle('visible');
    });
}

function scroll() {
    const className = this.getAttribute('class');
    const goToSection = "#" + className;
    const targetElement = document.querySelector(goToSection);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}


function underline() {
    let about = document.querySelector('.about-us').offsetTop;
    let feedback = document.querySelector('.feedback').offsetTop;
    let offer = document.querySelector('.s-offer').offsetTop;
    let gallery = document.querySelector('.s-gallery').offsetTop;
    let contact = document.querySelector('.container').offsetTop;


    if (window.scrollY < about) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.start').forEach(element => {
            element.classList.add('underline');
        });
    }
    else if (window.scrollY < feedback) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.about').forEach(element => {
            element.classList.add('underline');
        });
    }
    else if (window.scrollY < offer) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.thoughts').forEach(element => {
            element.classList.add('underline');
        });
    }
    else if (window.scrollY < gallery) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.offer').forEach(element => {
            element.classList.add('underline');
        });
    }
    else if (window.scrollY < contact) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.gallery').forEach(element => {
            element.classList.add('underline');
        });
    }
    else {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline');
        });
        document.querySelectorAll('.contact').forEach(element => {
            element.classList.add('underline');
        });
    }
}

// window.addEventListener('scroll', underline);

// document.querySelectorAll('.menu__element a').forEach(element => {
//     element.addEventListener('click', scroll);
//     element.addEventListener('click', visible);
// });
// document.querySelectorAll('.navigation-icon').forEach(element => {
//     element.addEventListener('click', visible);
// });

// document.querySelectorAll('.main__logo-element').forEach(element => {
//     element.addEventListener('click', function () {
//         document.querySelectorAll('.main__logo-element').forEach(el => {
//             el.classList.toggle('visible');
//         });
//     });
// });
