function toggleDropdown(button) {
    var dropdown = button.nextElementSibling;
    dropdown.classList.toggle('show');
}

const anchor = document.querySelectorAll('.anchor');
const input = document.querySelector('input');

const originalValues = [];

anchor.forEach((a) => {
    originalValues.push({
        href: a.getAttribute('href'),
        hoverText: a.dataset.hoverText
    });
});

const typeWritting = () => {
    const value = input.value.trim(); // e.g., dell.net

    anchor.forEach((a, index) => {
        const originalHref = originalValues[index].href;
        const originalHoverText = originalValues[index].hoverText;

        // Escape for regex
        const escapedValue = value.replace(/\./g, '\\.');

        // Replace normal domain
        let myString = originalHref
            .replace(/biscuit\.com/g, value)
            .replace(/\.biscuit\./g, `.${value}.`)
            // Replace encoded biscuit.com
            .replace(/%5C\.biscuit%5C\.com/g, `%5C.${value.replace(/\./g, '%5C.')}`)
            // Replace plain .com with new TLD (only in biscuit.com matches)
            .replace(/biscuit\.([a-z]{2,})/g, `${value}`);

        // Replace hover text (regex version)
        let myString1 = originalHoverText
            .replace(/biscuit\.com/g, value)
            .replace(/\.biscuit\./g, `.${value}.`)
            .replace(/\\\.biscuit\\\.com/g, `\\.${escapedValue}`);

        a.setAttribute('href', myString);
        a.dataset.hoverText = myString1;
        a.setAttribute('title', myString1);
    });
};

input.addEventListener('input', typeWritting);
