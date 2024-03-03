
function toggleVisibility() {
    const media = window.matchMedia("(max-width: 1025px)")
    if (media.matches) {
        const navigationBox = document.querySelector('.navigation__box');
        const menu = document.querySelector('.navigation__menu');
        const iconXmark = document.querySelector('.navigation__icon-xmark');
        const navIcon = document.querySelectorAll('.navigation__icon');
        const banner = document.querySelector('.header__banner');

        navIcon.forEach(element => element.classList.toggle('visible'));

        if (iconXmark.classList.contains('visible')) {
            menu.style.display = "block";
            navigationBox.style.display = "block";

            banner.classList.add('header__banner-border');

            const animationKeyframes = [
                { transform: 'translateY(-100%) scale(0.98)', opacity: 0, offset: 0 },
                { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
                { transform: 'translateY(0) scale(1)', opacity: 1, offset: 1 },
            ];

            const animationOptions = {
                duration: 800,
                fill: 'forwards'
            };

            const animation = navigationBox.animate(animationKeyframes, animationOptions);
        }
        else {
            const animationKeyframes = [
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
                { transform: 'translateY(-100%) scale(0.98)', opacity: 0 },
            ];

            const animationOptions = {
                duration: 800,
                fill: 'forwards'
            };
            const animation = navigationBox.animate(animationKeyframes, animationOptions);
            animation.onfinish = () => {
                menu.style.display = "none";
                navigationBox.style.display = "none";
                banner.classList.remove('header__banner-border');
            }



        };
    }
}

function scroll(e) {
    e.preventDefault();
    const element = this.getAttribute('data-section');
    if (element) {
        const goToSection = `#${element}`;
        const targetElement = document.querySelector(goToSection);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

function underlineUsingIntersectionObserver() {
    const menuItems = document.querySelectorAll('.navigation__item a');
    const sections = document.querySelectorAll('.section');
    const titles = document.querySelectorAll('.section__title');

    const updateClass = (elements, className, condition) => {
        elements.forEach(element => {
            element.classList.toggle(className, condition(element));
        });
    };

    const updateParentBackground = () => {
        const menuItems = document.querySelectorAll('.navigation__item');
        menuItems.forEach(menuItem => {
            const hasUnderlinedLink = menuItem.querySelector('a.underline') !== null;
            const animationKeyframes = [{
                backgroundColor: hasUnderlinedLink ? '#1f0034' : '#000',
                borderLeft: hasUnderlinedLink ? '5px solid #dbb030' : 'none'
            }];
            const animationOptions = {
                duration: 300,
                fill: 'forwards'
            };
            menuItem.animate(animationKeyframes, animationOptions);
        });
    };

    sections.forEach(section => {
        const observerCallbackSection = (entries, observer) => {
            entries.forEach(entry => {
                const isActive = entry.isIntersecting;
                const id = entry.target.getAttribute('id');
                const windowHeight = window.innerHeight / 5;
                const media = window.matchMedia("(min-width: 1025px)");
                if (
                    entry.boundingClientRect.top <= windowHeight &&
                    entry.boundingClientRect.bottom >= windowHeight &&
                    isActive
                ) {
                    updateClass(menuItems, 'underline', item => item.getAttribute('data-section') === id);
                    if (media.matches) {
                        updateParentBackground();
                    }
                }
            });
        };

        const observerOptionsSections = {
            root: null,
            rootMargin: '-13px 0px 0px',
            threshold: [...Array(21).keys()].map(x => x / 20)
        };
        const sectionObserver = new IntersectionObserver(observerCallbackSection, observerOptionsSections);
        sectionObserver.observe(section);
    });

    const observerCallbackTitles = (entries) => {
        entries.forEach(entry => {
            updateClass(titles, 'color', title => entry.isIntersecting && title.className.includes(entry.target.className));
        });
    };
    const observerOptionsTitles = {
        root: null,
        rootMargin: '0px 0px -85% 0px',
        threshold: 0.2
    };
    const titleObserver = new IntersectionObserver(observerCallbackTitles, observerOptionsTitles);
    titles.forEach(title => titleObserver.observe(title));
}

document.addEventListener('DOMContentLoaded', () => {
    underlineUsingIntersectionObserver();
    document.querySelectorAll('.navigation__item a').forEach(element => {
        element.addEventListener('click', scroll);
        element.addEventListener('click', toggleVisibility);
    });
    document.querySelectorAll('.navigation__icon').forEach(element => {
        element.addEventListener('click', toggleVisibility);
    });

    document.querySelectorAll('.section-start__logo__element').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelectorAll('.section-start__logo__element').forEach(e => {
                e.classList.toggle('visible');
            });
        });
    });
})
