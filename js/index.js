const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

console.log(navLinks)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("addedEvent Listener nav-open")
        console.log(`${link} clicked`)
        document.body.classList.remove('nav-open');
    })
})