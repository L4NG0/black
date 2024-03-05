export function loadPreferredLanguage() {
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage) {
        loadLanguage(preferredLanguage);
    }
}

export function loadLanguage(lang) {
    localStorage.removeItem('preferredLanguage');
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
    if (lang === document.documentElement.lang) {
        restoreOriginalLanguage(lang);
        return;
    }
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
            localStorage.setItem('preferredLanguage', lang);
        })
        .catch(error => console.error('Error loading the translation', error));
}
