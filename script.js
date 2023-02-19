const progressBar = document.querySelector('[data-js="progress-bar"]');
const navbar = document.querySelector('[data-js="navbar"]');
const navbarToggle = document.querySelector('[data-js="navbar-toggle"]');

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("responsive");
});

document.addEventListener("scroll", () => {
  progressBar.style.width = `${getScrollProgress()}%`;
});

function getScrollProgress() {
  return (
    (window.scrollY / (document.body.clientHeight + window.innerHeight)) * 100
  );
}
