const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll", () => {
  progressBar.style.width = `${getScrollProgress()}%`;
});

function getScrollProgress() {
  return (window.scrollY / document.body.clientHeight) * 100;
}
