// jeżeli banner na napisie to napis zmienia np. text-stroke albo text-fill

function toggleVisibility() {
    const menu = document.querySelector('.header__menu');
    const items = document.querySelectorAll('.header__menu__item');
    const isVisible = menu.classList.contains('visible');
    const isDisplay = () => {
        items.forEach(item => {
            item.style.display = (item.style.display === "none" || item.style.display === "") ? "block" : "none";
        })
    }
    document.querySelectorAll('.navigation-icon').forEach(element => {
        element.classList.toggle('visible');
    });

    document.querySelector('.header__banner').classList.toggle('header__banner-border', !isVisible);

    if (!isVisible) {
        menu.classList.add('visible');
        isDisplay(); menu.animate([
            { transform: 'translateY(-100%) scale(0.98)', opacity: 0, offset: 0 },
            { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
            { transform: 'translateY(0) scale(1)', opacity: 1, offset: 1 }
        ], {
            duration: 800,
            fill: 'forwards'
        });
    } else {
        menu.animate([
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
            { transform: 'translateY(-100%) scale(0.98)', opacity: 0 }
        ], {
            duration: 800,
            fill: 'forwards'
        }).onfinish = () => {
            isDisplay();
            menu.classList.remove('visible');
        };
    }
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

function underlineUsingIntersectionObserver() {
    const menuItems = document.querySelectorAll('.header__menu__item a');
    const sections = document.querySelectorAll('.section');
    const titles = document.querySelectorAll('.section__title');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.getAttribute('id');
                menuItems.forEach(item => {
                    item.classList.remove('underline');
                    if (item.getAttribute('data-section') === activeSection) {
                        item.classList.add('underline');
                    }
                });
            }
        });
    };
    const observerCallback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeTitle = entry.target.className;
                titles.forEach(item => {
                    item.classList.remove('color');
                    console.log(activeTitle, item);
                    if (item.className.includes(activeTitle)) {
                        item.classList.add('color');
                    }
                });
            }
            else {
                titles.forEach(item => {
                    item.classList.remove('color');
                })
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    const observerOptions2 = {
        root: null,
        rootMargin: '0px 0px -85% 0px',
        threshold: 0.5
    };
    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    const titleObserver = new IntersectionObserver(observerCallback2, observerOptions2);


    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    titles.forEach(title => {
        titleObserver.observe(title);
    });
}

underlineUsingIntersectionObserver();

document.querySelectorAll('.header__menu__item a').forEach(element => {
    element.addEventListener('click', scroll);
    element.addEventListener('click', toggleVisibility);
});
document.querySelectorAll('.navigation-icon').forEach(element => {
    element.addEventListener('click', toggleVisibility);
});

document.querySelectorAll('.section-start__logo__element').forEach(element => {
    element.addEventListener('click', function () {
        document.querySelectorAll('.section-start__logo__element').forEach(e => {
            e.classList.toggle('visible');
        });
    });
});
