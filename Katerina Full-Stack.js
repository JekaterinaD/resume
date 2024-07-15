function setLanguage(language) {
    document.querySelectorAll('[data-nl]').forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
}