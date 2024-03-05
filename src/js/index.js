import { createObserver } from './observers.js';
import { toggleVisibility, updateClassOnIntersect, updateParentBackground, scroll } from './uiInteractions.js';
import { throttle } from './throttle.js';
import { loadPreferredLanguage, loadLanguage } from './i18n.js';



let sectionObserver = createObserver({
    targetSelector: '.section',
    rootMargin: '-13px 0px 0px',
    threshold: [...Array(21).keys()].map(x => x / 20),
    onIntersect: (entry, observer) => {
        const menuItems = document.querySelectorAll('.navigation__item a');
        const isActive = entry.isIntersecting;
        const id = entry.target.getAttribute('id');
        const windowHeight = window.innerHeight / 5;
        const media = window.matchMedia("(min-width: 1025px)");
        if (
            entry.boundingClientRect.top <= windowHeight &&
            entry.boundingClientRect.bottom >= windowHeight &&
            isActive
        ) {
            updateClassOnIntersect(entry, menuItems, 'underline');
            if (media.matches) {
                updateParentBackground();
            }
        }
    }
});

let titleObserver = createObserver({
    targetSelector: '.section__title',
    rootMargin: '0px 0px -85% 0px',
    threshold: 0.2,
    onIntersect: (entry, observer) => {
        const isActive = entry.isIntersecting;
        entry.target.classList.toggle('color', isActive);
    }
}
)

let toggle = throttle(toggleVisibility, 800);
let lang = function () { loadLanguage(this.textContent.toLowerCase()) }
document.addEventListener('DOMContentLoaded', () => {
    loadPreferredLanguage();
    sectionObserver;
    titleObserver;

    document.querySelectorAll('#buttonTranslate').forEach(element => {
        element.addEventListener('click', lang)
    });

    document.querySelectorAll('.navigation__item a').forEach(element => {
        element.addEventListener('click', scroll);
        element.addEventListener('click', toggle);
    });
    document.querySelectorAll('.navigation__icon').forEach(element => {
        element.addEventListener('click', toggle);
    });

    document.querySelectorAll('.section-start__logo__element').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelectorAll('.section-start__logo__element').forEach(e => {
                e.classList.toggle('visible');
            });
        });
    });
})




