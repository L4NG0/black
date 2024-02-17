function visible() {
    document.querySelectorAll('.navigation-icon').forEach(element => {
        element.classList.toggle('visible');
    });
    document.querySelectorAll('.menu__list').forEach(element => {
        element.classList.toggle('visible');
    });
}

function scroll() {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
}

function underline() {
    let about = $('.about-us').offset().top
    let feedback = $('.feedback').offset().top
    let offer = $('.s-offer').offset().top
    let gallery = $('.s-gallery').offset().top
    let contact = $('.container').offset().top

    if ($(window).scrollTop() < about) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.start').forEach(element => {
            element.classList.add('underline')
        })
    }

    else if ($(window).scrollTop() < feedback) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.about').forEach(element => {
            element.classList.add('underline')
        })
    }
    else if ($(window).scrollTop() < offer) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.thoughts').forEach(element => {
            element.classList.add('underline')
        })
    }
    else if ($(window).scrollTop() < gallery) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.offer').forEach(element => {
            element.classList.add('underline')
        })
    }
    else if ($(window).scrollTop() < contact) {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.gallery').forEach(element => {
            element.classList.add('underline')
        })
    }


    else {
        document.querySelectorAll('.menu__element a').forEach(element => {
            element.classList.remove('underline')
        })
        document.querySelectorAll('.contact').forEach(element => {
            element.classList.add('underline')
        })
    }
}

$(window).on('scroll', underline)

document.querySelectorAll('.menu__element a').forEach(element => {
    element.addEventListener('click', scroll);
    element.addEventListener('click', visible);
});
document.querySelectorAll('.navigation-icon').forEach(element => {
    element.addEventListener('click', visible);
});

document.querySelectorAll('.main__logo-element').forEach(element => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.main__logo-element').forEach(el => {
            el.classList.toggle('visible');
        });
    });
});
