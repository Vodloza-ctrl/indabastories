const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const packagesModal = document.getElementById('packagesModal');
const closePackages = document.getElementById('closePackages');
const packageOpeners = document.querySelectorAll('[data-open-packages]');
const schoolForm = document.getElementById('schoolForm');
const formStatus = document.getElementById('formStatus');

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

if (schoolForm) {
  schoolForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const school = document.getElementById('school')?.value.trim() || '';
    const contact = document.getElementById('contact')?.value.trim() || '';
    const role = document.getElementById('role')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const interest = document.getElementById('interest')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    const whatsappNumber = '263776773231';
    const lines = [
      'Hello Indaba Stories Academy,',
      '',
      'We would like to enquire about a school partnership.',
      '',
      `School: ${school}`,
      `Contact person: ${contact}`,
      `Role / position: ${role}`,
      `Phone number: ${phone}`,
      `Area of interest: ${interest}`,
      '',
      'About our school / what we want to explore:',
      message,
    ];

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    if (formStatus) {
      formStatus.textContent = 'Opening WhatsApp with your enquiry...';
    }

    window.open(url, '_blank');
  });
}
