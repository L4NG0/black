export function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        loadLanguage(preferredLanguage);
    }
}

let originalElements = new Map();

function cloneAndStoreElements() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const clone = el.cloneNode(true);
        originalElements.set(el.getAttribute('data-translate'), clone);
    });
}

cloneAndStoreElements();

export function loadLanguage(lang) {
    if (lang === document.documentElement.lang) {
        restoreDefaultLanguage();
        localStorage.removeItem('preferredLanguage');
    } else {
        fetch(`translations/${lang}.json`)
            .then(response => response.json())
            .then(translations => {
                applyTranslations(translations);
                localStorage.setItem('preferredLanguage', lang);
            })
            .catch(error => console.error('Error loading the translation', error));
    }
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[key]) {
            el.textContent = translations[key];
        }
    });
}

function restoreDefaultLanguage() {
    originalElements.forEach((clone, key) => {
        const original = document.querySelector(`[data-translate="${key}"]`);
        if (original && clone) {
            original.parentNode.replaceChild(clone.cloneNode(true), original); // Użyj klonu klonu, aby zachować oryginał w mapie
        }
    });
}