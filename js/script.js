
// Define the function to toggle dropdown visibility
function toggleDropdown(button) {
    var dropdown = button.nextElementSibling;
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
}

const anchor = document.querySelectorAll('.anchor');
const input = document.querySelector('input');

const originalValues = [];

anchor.forEach((a, index) => {
    originalValues.push({
        href: a.getAttribute('href'),
        hoverText: a.dataset.hoverText
    });
});

const typeWritting = () => {
    const value = input.value;

    anchor.forEach((a, index) => {
        const originalHref = originalValues[index].href;
        const originalHoverText = originalValues[index].hoverText;

        // Replace biscuit.com and .biscuit. with input value
        const myString = originalHref
            .replace(/biscuit\.com/g, value)
            .replace(/\.biscuit\./g, `.${value}.`);
        const myString1 = originalHoverText
            .replace(/biscuit\.com/g, value)
            .replace(/\.biscuit\./g, `.${value}.`);

        a.setAttribute('href', myString);
        a.dataset.hoverText = myString1;
        a.setAttribute('title', myString1);
    });
};


input.addEventListener('input', typeWritting);
