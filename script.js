
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const packagesModal = document.getElementById('packagesModal');
const closePackages = document.getElementById('closePackages');
const packageOpeners = document.querySelectorAll('[data-open-packages]');
const year = document.getElementById('year');
const slides = document.querySelectorAll('.hero-slideshow .slide');
let currentSlide = 0;

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a, button').forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function openPackagesModal() {
  if (!packagesModal) return;
  packagesModal.classList.add('active');
  packagesModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePackagesModal() {
  if (!packagesModal) return;
  packagesModal.classList.remove('active');
  packagesModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

packageOpeners.forEach((btn) => btn.addEventListener('click', openPackagesModal));
if (closePackages) closePackages.addEventListener('click', closePackagesModal);
if (packagesModal) {
  packagesModal.addEventListener('click', (event) => {
    if (event.target === packagesModal) closePackagesModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePackagesModal();
});

function runHeroSlideshow() {
  if (!slides.length) return;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4200);
}

runHeroSlideshow();
