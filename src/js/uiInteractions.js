function setStyle(elements, styleProp, value) {
    elements.forEach(element => {
        element.style[styleProp] = `${value}`
    });
}
export function updateParentBackground() {
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
export function updateClassOnIntersect(entry, elements, className) {
    if (entry && entry.isIntersecting) {
        elements.forEach(element => {
            const condition = element.getAttribute('data-section') === entry.target.getAttribute('id');
            element.classList.toggle(className, condition);
        });
    }
}

function animateElements(elements, keyframes, options, onFinish) {
    const animations = elements.map(element => element.animate(keyframes, options).finished);

    Promise.all(animations).then(onFinish);
}
function reverseKeyframes(keyframes) {
    return keyframes.map(frame => {
        const reversedFrame = { ...frame };

        if ('offset' in reversedFrame) {
            reversedFrame.offset = 1 - reversedFrame.offset;
        }

        return reversedFrame;
    }).reverse();
}

export function toggleVisibility() {
    const media = window.matchMedia("(max-width: 1025px)")
    if (media.matches) {
        const navigationBox = document.querySelector('.navigation__box');
        const footer = document.querySelector('.footer');
        const navIcon = document.querySelectorAll('.navigation__icon');
        const banner = document.querySelector('.header__banner');
        const elementsToAnimate = [navigationBox, footer];

        const animationKeyframes = [
            { transform: 'translateY(-100%) scale(0.98)', opacity: 0, offset: 0 },
            { transform: 'translateY(-2%) scale(0.98)', offset: 0.5 },
            { transform: 'translateY(0) scale(1)', opacity: 1, offset: 1 },
        ];
        const animationOptions = {
            duration: 800,
            fill: 'forwards'
        };






        if (navIcon[0].classList.contains('visible')) {
            setStyle(elementsToAnimate, "display", "block");
            banner.classList.add('header__banner-border');
            animateElements(elementsToAnimate, animationKeyframes, animationOptions, () => {
                navIcon.forEach(element => element.classList.toggle('visible'));

            });
        }
        else {
            setStyle(elementsToAnimate, "pointerEvents", "none");
            animateElements(elementsToAnimate, reverseKeyframes(animationKeyframes), animationOptions, () => {
                setStyle(elementsToAnimate, "pointerEvents", "auto");
                setStyle(elementsToAnimate, "display", "none");
                banner.classList.remove('header__banner-border');
                navIcon.forEach(element => element.classList.toggle('visible'));

            });
        }
    };
}

export function scroll(e) {
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


