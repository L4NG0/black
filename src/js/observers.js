
export function createObserver({
    targetSelector,
    root = null,
    rootMargin = '0px',
    threshold = [],
    onIntersect
}) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            onIntersect(entry, observer);
        });
    }, { root, rootMargin, threshold });

    const targets = document.querySelectorAll(targetSelector);
    targets.forEach(target => observer.observe(target));

    return observer;
}
