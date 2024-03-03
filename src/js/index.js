function loadLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        if (!el.getAttribute('data-original')) {
            el.setAttribute('data-original', el.textContent);
        }
    });
    function restoreOriginalLanguage() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const originalContent = el.getAttribute('data-original');
            if (originalContent) {
                el.textContent = originalContent;
            }
        });
    }
    console.log(document.documentElement.lang);
    if (lang === document.documentElement.lang) {
        restoreOriginalLanguage();
        return;
    }
    console.log(lang);
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
        })
        .catch(error => console.error('Error loading the translation', error));
}
function toggleVisibility() {
    const media = window.matchMedia("(max-width: 1025px)")
    if (media.matches) {
        const navigationBox = document.querySelector('.navigation__box');
        const footer = document.querySelector('.footer');
        const iconXmark = document.querySelector('.navigation__icon-xmark');
        const navIcon = document.querySelectorAll('.navigation__icon');
        const banner = document.querySelector('.header__banner');
        const elementsToAnimate = [navigationBox, footer];

        const animationKeyframesStart = [
            { transform: 'translateY(-100%) scale(0.98)', opacity: 0, offset: 0 },
            { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
            { transform: 'translateY(0) scale(1)', opacity: 1, offset: 1 },
        ];
        const animationKeyframesEnd = [
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
            { transform: 'translateY(-100%) scale(0.98)', opacity: 0 },
        ];
        const animationOptions = {
            duration: 800,
            fill: 'forwards'
        };

        function animateElements(elements, keyframes, options, onFinish) {
            const animations = elements.map(element => element.animate(keyframes, options).finished);

            Promise.all(animations).then(onFinish);
        }

        navIcon.forEach(element => element.classList.toggle('visible'));

        if (iconXmark.classList.contains('visible')) {
            navigationBox.style.display = "block";
            footer.style.display = "block";
            banner.classList.add('header__banner-border');
            animateElements(elementsToAnimate, animationKeyframesStart, animationOptions, () => { });
        }
        else {
            animateElements(elementsToAnimate, animationKeyframesEnd, animationOptions, () => {
                navigationBox.style.display = "none";
                footer.style.display = "none";
                banner.classList.remove('header__banner-border');
            });
        }
    };
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
    document.getElementById('buttonEn').addEventListener('click', function () {
        loadLanguage('en');
    });

    document.getElementById('buttonPl').addEventListener('click', function () {
        loadLanguage('pl');
    });

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
